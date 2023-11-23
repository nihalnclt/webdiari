import { User } from "../models";

const userDbRepositoryImpl = () => {
    const findById = (id: string) => User.findById(id).select("-password");

    return { findById };
};

export type userDbRepositoryImplType = typeof userDbRepositoryImpl;
export default userDbRepositoryImpl;
