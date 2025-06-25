import { Request } from "express";
import { IUser } from "../models/UserAccount";

export interface AuthenticatedRequest extends Request {
    user: IUser;
}