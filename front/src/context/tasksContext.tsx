import React, { createContext, PropsWithChildren, useState } from 'react';
import TaskList from '../components/taskList/taskList';
import { useEffect } from 'react';
import { api } from '../services/api';

interface TasksProps {
    name: string;
    description: string;
    status: string;
    idUser: string;
    id: string;
}

export const TasksContext = createContext<TasksProps[]>({} as TasksProps[]);