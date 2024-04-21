class Account1 {
    id: number;
    userName: string;
    password: string;
    isLogin: boolean;
    role: string;
    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login(): void {
        // Simulate login process
        this.isLogin = true;
        console.log("Login successful");
    }
    logout(): void {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Logout successful");
        }
    }
}

class UserAcc extends Account {
    status: string;
    constructor(id: number, userName: string, password: string, role: string, status: string) {
        super(id, userName, password, role);
        this.status = status;
    }
    login(): void {
        if (this.status === "active") {
            super.login(); // Gọi phương thức login của lớp cha
        } else if (this.status === "banned") {
            console.log("Account is banned. Please contact support.");
        }
    }
}

// Sử dụng lớp UserAcc
let user = new UserAcc(1, "user1", "password1", "user", "active");
user.login(); // Thử đăng nhập với status là active
user.logout(); // Thử đăng xuất
let bannedUser = new UserAcc(2, "bannedUser", "bannedPass", "user", "banned");
bannedUser.login(); // Thử đăng nhập với status là banned