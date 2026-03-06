class ChessGame {
  // Static property: ONE shared instance for entire app
  private static _instance: ChessGame | null = null;
  
  // Private board state
  private _board: string[][] = Array(8).fill().map(() => Array(8).fill(null));
  private _currentPlayer: 'white' | 'black' = 'white';
  private _gameOver: boolean = false;

  // Private constructor (can't call new ChessGame() directly)
  private constructor() {
    this._initializeBoard();
  }

  // ✅ Static method: Get the SINGLE instance
  public static getInstance(): ChessGame {
    if (!ChessGame._instance) {
      ChessGame._instance = new ChessGame();
    }
    return ChessGame._instance;
  }

  private _initializeBoard(): void {
    // Simplified starting position
    this._board[0] = ['♜','♞','♝','♛','♚','♝','♞','♜']; // Black pieces
    this._board[1] = Array(8).fill('♟');                  // Black pawns
    this._board[6] = Array(8).fill('♙');                  // White pawns  
    this._board[7] = ['♖','♘','♗','♕','♔','♗','♘','♖']; // White pieces
  }

  // Public methods
  public movePiece(fromRow: number, fromCol: number, toRow: number, toCol: number): boolean {
    if (this._gameOver) return false;
    
    const piece = this._board[fromRow][fromCol];
    if (!piece) return false;

    this._board[toRow][toCol] = piece;
    this._board[fromRow][fromCol] = null;
    this._currentPlayer = this._currentPlayer === 'white' ? 'black' : 'white';
    return true;
  }

  public getBoard(): string[][] {
    return this._board.map(row => [...row]); // Return copy
  }

  public getCurrentPlayer(): 'white' | 'black' {
    return this._currentPlayer;
  }
}

// ✅ USAGE - Same as JavaScript!
const game1 = ChessGame.getInstance();
const game2 = ChessGame.getInstance();

console.log(game1 === game2);  // true - SAME INSTANCE!

game1.movePiece(6, 4, 4, 4);  // White pawn e2→e4
console.log(game1.getCurrentPlayer()); // 'black'

// game2 sees the SAME board state
console.log(game2.getBoard()[4][4]);   // '♙'

// ❌ TypeScript compiler prevents this:
// const game3 = new ChessGame();  // Error: 'ChessGame' constructor is private
