function createAccount(pin=2023, amount=0.0) {
    let currentPin = pin, balance = amount;
    
    function getBalance(){
        return balance.toFixed(2);
    }
    
    return {
        checkBalance(p){
            return p == currentPin ? `Your current balance is $${getBalance()}.` : "Invalid pin";
        },
        deposit(p, amount){
            if (p == currentPin){
                balance += Math.abs(amount);
                
                return `Your new balance is $${getBalance()}`;
            }else{
                return 'Invalid pin';
            }
        },
        withdraw(p, amount){
            if (p == currentPin){
                amount = Math.abs(amount);
                if (amount > getBalance()) return "Widthdrawal amount exceeds current balance.";
                balance -= amount;
                
                return `Your new balance is $${getBalance()}`;
            }else{
                return 'Invalid pin';
            }
        },
        changePin(p, n){
            if (p == currentPin){
                currentPin = n;
                return `Your new pin has been set successfully.`;
            }else{
                return 'Invalid pin';
            }
        }
    }
}

module.exports = { createAccount };
