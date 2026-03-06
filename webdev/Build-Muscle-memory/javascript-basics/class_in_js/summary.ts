// BASE CLASS - uses private, protected, constructor
class GamePiece {
  protected color: 'white' | 'black';
  private _moves: number = 0;

  constructor(color: 'white' | 'black') {
    this.color = color;
  }

  // Public getter for private field
  get movesMade(): number {
    return this._moves;
  }

  protected incrementMoves(): void {
    this._moves++;
  }
}

// CHESS GAME SINGLETON - private constructor, static, private fields
class ChessGame {
  // Static singleton instance
  private static _instance: ChessGame | null = null;
  
  // Private game state
  private _board: (GamePiece | null)[][] = 
    Array(8).fill().map(() => Array(8).fill(null));
  private _currentPlayer: 'white' | 'black' = 'white';
  private _gameOver: boolean = false;
  private _moveHistory: string[] = [];

  // Private constructor
  private constructor() {
    this._initializeBoard();
  }

  // Static factory method
  public static getInstance(): ChessGame {
    if (!ChessGame._instance) {
      ChessGame._instance = new ChessGame();
    }
    return ChessGame._instance;
  }

  // Static utility method
  public static isValidPosition(row: number, col: number): boolean {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  }

  private _initializeBoard(): void {
    // Simplified pieces (normally you'd have Pawn, Rook, etc. extending GamePiece)
    this._board[0] = Array(8).fill(new GamePiece('black')) as (GamePiece | null)[];
    this._board[1] = Array(8).fill(new GamePiece('black')) as (GamePiece | null)[];
    this._board[6] = Array(8).fill(new GamePiece('white')) as (GamePiece | null)[];
    this._board[7] = Array(8).fill(new GamePiece('white')) as (GamePiece | null)[];
  }

  public movePiece(fromRow: number, fromCol: number, toRow: number, toCol: number): boolean {
    if (this._gameOver || !ChessGame.isValidPosition(fromRow, fromCol) || 
        !ChessGame.isValidPosition(toRow, toCol)) {
      return false;
    }

    const piece = this._board[fromRow][fromCol];
    if (!piece || piece.color !== this._currentPlayer) {
      return false;
    }

    // Move piece
    this._board[toRow][toCol] = piece;
    this._board[fromRow][fromCol] = null;
    
    // Record move (protected method from parent)
    (piece as any).incrementMoves();
    
    this._moveHistory.push(`${this._currentPlayer} moves`);
    this._currentPlayer = this._currentPlayer === 'white' ? 'black' : 'white';
    return true;
  }

  public getBoard(): (GamePiece | null)[][] {
    return this._board.map(row => row.map(piece => piece ? { ...piece, _moves: piece.movesMade } : null));
  }

  public getStats(): { currentPlayer: 'white' | 'black', moveCount: number } {
    return {
      currentPlayer: this._currentPlayer,
      moveCount: this._moveHistory.length
    };
  }
}

// EXTENDED CLASS - OnlineChessGame extends ChessGame (uses super, protected)
class OnlineChessGame extends ChessGame {
  private _opponentName: string;
  private _isConnected: boolean = true;

  constructor(opponentName: string) {
    super();  // Call parent constructor
    this._opponentName = opponentName;
  }

  // Override parent's movePiece method
  public movePiece(fromRow: number, fromCol: number, toRow: number, toCol: number): boolean {
    if (!this._isConnected) {
      console.log('❌ Not connected to opponent');
      return false;
    }

    console.log(`📡 Sending ${this.getStats().currentPlayer} move to ${this._opponentName}`);
    
    // Call parent's move logic using super
    const success = super.movePiece(fromRow, fromCol, toRow, toCol);
    
    if (success) {
      console.log(`✅ Move accepted by ${this._opponentName}`);
    }
    return success;
  }

  public disconnect(): void {
    this._isConnected = false;
  }
}

console.log("🏁 Starting Chess Application...\n");

// 1. SINGLETON: Same instance everywhere
const game1 = ChessGame.getInstance();
const game2 = ChessGame.getInstance();
console.log("Singleton test:", game1 === game2); // true

// 2. Static utility
console.log("Valid position test:", ChessGame.isValidPosition(3, 3)); // true

// 3. Basic moves
game1.movePiece(6, 4, 4, 4);  // White pawn forward
console.log("Current player:", game1.getStats().currentPlayer); // black

// 4. EXTENDED CLASS usage
const onlineGame = new OnlineChessGame("Alice");
onlineGame.movePiece(6, 3, 4, 3);  // Black pawn forward

// 5. Both games share state (singleton)
console.log("Shared board state - game2 sees onlineGame moves:");
console.log(game2.getBoard()[4][3]); 

console.log("\n Final stats:", game2.getStats());
