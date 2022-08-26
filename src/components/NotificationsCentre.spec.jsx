import { cleanup, render, screen } from "@testing-library/react";
import React from 'react';
import NotificationActions from "../actions/NotificationActions";
import "./NotificationsCentre"
import NotificationsCentre from "./NotificationsCentre";
import * as hooks from "../hooks/useNotifications";
import userEvent from '@testing-library/user-event'

describe("tests for notification centre", ()=>{

    afterEach(()=>{
        cleanup();
    })



    test("Title of the app shows notifications", ()=>{
        render(<NotificationsCentre/>)
        const title = screen.getByText("Notifications")
        expect(title).toBeInTheDocument();
    })

    test("component gets notifications once when it renders", ()=>{

        jest.spyOn(NotificationActions, "getNotifications")
        render(<NotificationsCentre/>)
        expect(NotificationActions.getNotifications).toBeCalledTimes(1)
    })

    test("centre displays 1 card is notifications is 1", ()=>{

        const mockNotifications= [{
            "Title": "David title",
            "Read": true,
            "Dismissed": false,
            "id": "1"
           },
           {
            "Title": "David title",
            "Read": true,
            "Dismissed": false,
            "id": "2"
           }]


        

           jest.spyOn(hooks, "useNotifications").mockImplementation(()=>{
            return [mockNotifications, jest.fn()]
        })


        render(<NotificationsCentre/>)
        const cards = screen.getAllByTestId("card")

        expect(cards.length).toBe(2);
    })

    test("click read button", ()=>{

        const mockNotifications= [{
            "Title": "David title",
            "Read": false,
            "Dismissed": false,
            "id": "1"
           }]

        const mockStateUpdate = jest.fn()

    
        jest.spyOn(hooks, "useNotifications").mockImplementation(()=>{
            return [mockNotifications, mockStateUpdate]
        })

        render(<NotificationsCentre/>)
        const button = screen.getAllByTestId("readButton")[0]
        expect(button).toBeVisible();
        userEvent.click(button);
        expect(mockStateUpdate).toHaveBeenCalledTimes(1);
        expect(mockStateUpdate).toHaveBeenCalledWith(mockNotifications);
        expect(button).not.toBeVisible();



      
    })



});