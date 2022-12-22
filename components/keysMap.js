// ANIMATION FRAMER MOTION
import {motion} from 'framer-motion';
import { useState } from 'react';

export default function KeysMap() {
    const [key, setKey] = useState('NOT SETUP');
    const [desc, setDesc] = useState('This key is not yet setup, contact an admin for more info!');
    const changekey = (k,d) => {
        setKey(k);
        setDesc(d);
    }
    return(
        <>
            <input type="checkbox" id="keymodal" class="modal-toggle" />
            <label for="keymodal" class="modal cursor-pointer">
            <label class="modal-box relative" for="">
                <h3 class="text-lg font-bold">KEY: {`${key}`}</h3>
                <p class="py-4">{`${desc}`}</p>
            </label>
            </label>

            <motion.div
                    initial={{ x: "200vw" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1.5 }}
            >
                <div className='h-screen tablet:flex desktop:flex flex-col justify-center items-center bg-base-200 hidden'>
                    <p id="ww-controls" className='text-primary text-4xl font-bold mb-4'>
                        Server Game Controls
                    </p>
                    <div className='w-11/12'>
                        <div class="flex justify-center gap-1 my-1 w-full">
                            <label
                                onClick={() => {setKey('KEY_BACKQUOTE');setDesc('This key opens the console.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                `
                            </label>
                            <label
                                onClick={() => {setKey('1');setDesc('This key selects the hotbar slot "1". When in a vehicle this key switches your seat to seat "1"');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                1
                            </label>
                            <label
                                onClick={() => {setKey('2');setDesc('This key selects the hotbar slot "2". When in a vehicle this key switches your seat to seat "2"');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                2
                            </label>
                            <label
                                onClick={() => {setKey('3');setDesc('This key selects the hotbar slot "3". When in a vehicle this key switches your seat to seat "3"');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                3
                            </label>
                            <label
                                onClick={() => {setKey('4');setDesc('This key selects the hotbar slot "4". When in a vehicle this key switches your seat to seat "4"');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                4
                            </label>
                            <label
                                onClick={() => {setKey('5');setDesc('This key selects the hotbar slot "5". When in a vehicle this key switches your seat to seat "5"');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                5
                            </label>
                            <label
                                onClick={() => {setKey('6');setDesc('This key selects the hotbar slot "6". When in a vehicle this key switches your seat to seat "6"');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                6
                            </label>
                            <label
                                onClick={() => {setKey('7');setDesc('When in a vehicle this key switches your seat to seat "7"');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                7
                            </label>
                            <label
                                onClick={() => {setKey('8');setDesc('When in a vehicle this key switches your seat to seat "8"');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                8
                            </label>
                            <label
                                onClick={() => {setKey('9');setDesc('When in a vehicle this key switches your seat to seat "8"');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                9
                            </label>
                            <label
                                onClick={() => {setKey('0');setDesc('When in a vehicle this key switches your seat to seat "9"');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                0
                            </label>
                            <label
                                onClick={() => {setKey('-');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                -
                            </label>
                            <label
                                onClick={() => {setKey('+');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                +
                            </label>
                            <label
                                onClick={() => {setKey('KEY_BACKSPACE');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                Backspace
                            </label>
                        </div>
                        <div class="flex justify-center gap-1 my-1 w-full">
                            <label
                                onClick={() => {setKey('KEY_TAB');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                TAB&nbsp;&nbsp;&nbsp;
                            </label>
                            <label
                                onClick={() => {setKey('q');setDesc('This key opens the spawn menu. (Disabled for players)');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                q
                            </label>
                            <label
                                onClick={() => {setKey('w');setDesc('This key is used to move forward. In a car this key is used to accelerate.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                w
                            </label>
                            <label
                                onClick={() => {setKey('e');setDesc('This key is used to interact with NPCs and other interactable entities.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                e
                            </label>
                            <label
                                onClick={() => {setKey('r');setDesc('This key is used to reload your current weapon.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                r
                            </label>
                            <label
                                onClick={() => {setKey('t');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                t
                            </label>
                            <label
                                onClick={() => {setKey('y');setDesc('This key is used to open the chat box.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                y
                            </label>
                            <label
                                onClick={() => {setKey('u');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                u
                            </label>
                            <label
                                onClick={() => {setKey('i');setDesc('This key is used to open the ingame inventory.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                i
                            </label>
                            <label
                                onClick={() => {setKey('o');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                o
                            </label>
                            <label
                                onClick={() => {setKey('p');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                p
                            </label>
                            <label
                                onClick={() => {setKey('[');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                [
                                </label>
                            <label
                                onClick={() => {setKey(']');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                ]
                            </label>
                            <label
                                onClick={() => {setKey('\\');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                \&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </label>
                        </div>
                        <div class="flex justify-center gap-1 my-1 w-full">
                            <label
                                onClick={() => {setKey('KEY_CAPSLOCK');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                Caps Lock&nbsp;&nbsp;&nbsp;&nbsp;
                            </label>
                            <label
                                onClick={() => {setKey('a');setDesc('This key is used to move left. When in a vehicle this key turns the car steering to the left.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                a
                            </label>
                            <label
                                onClick={() => {setKey('s');setDesc('This key is used to move backwards. When in a vehicle this key puts car in reverse and accelerates.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                s
                            </label>
                            <label
                                onClick={() => {setKey('d');setDesc('This key is used to move right. When in a vehicle this key turns the car steering to the right.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                d
                            </label>
                            <label
                                onClick={() => {setKey('f');setDesc('This key turns on the player\'s flashlight. When in a vehicle this key turns on the underglow.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                f
                            </label>
                            <label
                                onClick={() => {setKey('g');setDesc('This key opens your smart watch. When in a vehicle .');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                g
                            </label>
                            <label
                                onClick={() => {setKey('h');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                h
                            </label>
                            <label
                                onClick={() => {setKey('j');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                j
                            </label>
                            <label
                                onClick={() => {setKey('l');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                l
                            </label>
                            <label
                                onClick={() => {setKey('KEY_SEMICOLON');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                ;
                            </label>
                            <label
                                onClick={() => {setKey('KEY_APOSTROPHE');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                {`'`}
                            </label>
                            <label
                                onClick={() => {setKey('KEY_ENTER');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                &nbsp;&nbsp;&nbsp;ENTER&nbsp;&nbsp;&nbsp;
                            </label>
                        </div>
                        <div class="flex justify-center gap-1 my-1 w-full">
                            <label
                                onClick={() => {setKey('KEY_LSHIFT');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                ⇧ LShift&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </label>
                            <label
                                onClick={() => {setKey('z');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                z
                            </label>
                            <label
                                onClick={() => {setKey('x');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                x
                            </label>
                            <label
                                onClick={() => {setKey('c');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                c
                            </label>
                            <label
                                onClick={() => {setKey('v');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                v
                            </label>
                            <label
                                onClick={() => {setKey('b');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                b
                            </label>
                            <label
                                onClick={() => {setKey('n');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                n
                            </label>
                            <label
                                onClick={() => {setKey('m');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                m
                            </label>
                            <label
                                onClick={() => {setKey('KEY_COMMA');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                ,
                            </label>
                            <label
                                onClick={() => {setKey('KEY_PERIOD');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                .
                            </label>
                            <label
                                onClick={() => {setKey('/');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                /
                            </label>
                            <label
                                onClick={() => {setKey('KEY_RSHIFT');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                &nbsp;&nbsp;⇧ RShift&nbsp;&nbsp;
                            </label>
                        </div>
                        <div class="flex justify-center gap-1 my-1 w-full">
                            <label
                                onClick={() => {setKey('KEY_LCONTROL');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                &nbsp;LCtrl&nbsp;
                            </label>
                            <label
                                onClick={() => {setKey('KEY_LWIN');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                Win
                            </label>
                            <label
                                onClick={() => {setKey('KEY_LALT');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                Alt&nbsp;
                            </label>
                            <label
                                onClick={() => {setKey('KEY_SPACE');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SPACE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </label>
                            <label
                                onClick={() => {setKey('`KEY_RALT');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                Alt&nbsp;
                            </label>
                            <label
                                onClick={() => {setKey('KEY_RWIN');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                Win
                            </label>
                            <label
                                onClick={() => {setKey('MENU');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                Menu
                            </label>
                            <label
                                onClick={() => {setKey('KEY_RCONTROL');setDesc('This key has no function.');}}
                                for="keymodal" className="btn btn-outline kbd kbd-lg"
                            >
                                &nbsp;RCTRL&nbsp;
                            </label>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}