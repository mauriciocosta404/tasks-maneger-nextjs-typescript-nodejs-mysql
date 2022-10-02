import React, { createContext, PropsWithChildren, useState } from 'react';
import TaskList from '../components/taskList/taskList';
import { useEffect } from 'react';
import { api } from '../services/api';

interface UsersProps {
    idUser: number;
    name: string;
    email: string;
}

export const UsersContext = createContext<UsersProps[]>({} as UsersProps[]);
