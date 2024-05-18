interface AdditionalInfo {
    country: string;
    gender: string;
}

class User
{
    username : String;
    country: string;
    gender: string;
    role: string;
  
    constructor(username: string, additionalInfo: AdditionalInfo, role: string)
    {
        this.username = username;
        this.country = additionalInfo.country;
        this.gender = additionalInfo.gender;
        this.role = role;
    }
}

export default User;