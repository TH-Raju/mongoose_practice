import { NextFunction, Request, Response } from "express";
import { createUserToDB, getAdminUsersFromDB, getUserFromDB, getUserIdFromDB } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const user = await createUserToDB(data)
};
export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const user = await getUserFromDB();
    res.status(200).json({
        status: "success",
        data: user,
    })
};
export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const user = await getUserIdFromDB(id);
    res.status(200).json({
        status: "success",
        data: user,
    })
};
export const getAdminUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await getAdminUsersFromDB();
    res.status(200).json({
        status: "success",
        data: user,
    })
};



// createUserToDB from user.service.ts

//pattern
// Route -> controller -> Service