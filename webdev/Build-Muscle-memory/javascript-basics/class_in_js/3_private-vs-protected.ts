class Employees {
  private name: string = "Alice";        // Only Employees can see
  protected salary: number = 50000;      // Employees + Managers can see
  public role: string = "Developer";     // Anyone can see
}

class Managers extends Employees {
  constructor() {
    super();
    console.log(this.name);    // ❌ ERROR: 'name' is private
    console.log(this.salary);  // ✅ OK: protected accessible in child
    console.log(this.role);    // ✅ OK: public
  }

  giveRaise() {
    this.salary += 5000;       // ✅ Can modify protected salary
    // this.name = "Bob";     // ❌ Can't touch private name
  }
}

// Outside usage
const mgr1 = new Managers();
console.log(mgr1.role);     // ✅ "Developer"
console.log(mgr1.salary);   // ❌ ERROR: 'salary' is protected
// console.log(mgr.name); // ❌ ERROR: 'name' is private


/*
Points to remember :

private   → Internal class state (#secretData)
protected → Shared with children (salary, playerTurn)
public    → External API (getBoard(), movePiece())

*/
