import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const user = await new User(payload); // User -> class user ->
    await user.save(); // built in instance methods custom instance methods
    // console.log(user);
    // console.log(user.fullName());
    return user
};

export const getUserFromDB = async (): Promise<IUser[]> => {
    const users = await User.find()
    return users;
};

export const getUserIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 })
    return user;

}

export const getAdminUsersFromDB = async () => {
    const admins = await User.getAdminUsers();
    return admins;
}