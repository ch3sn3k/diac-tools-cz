// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const sdiak = "áäčďéěíĺľňóôőöŕšťúůűüýřžÁÄČĎÉĚÍĹĽŇÓÔŐÖŔŠŤÚŮŰÜÝŘŽ";
const bdiak = "aacdeeillnoooorstuuuuyrzAACDEEILLNOOOORSTUUUUYRZ";

const numbers = "1234567890[;";
const letters = "+ěščřžýáíéúů";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    
    
// The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let removeCmd = vscode.commands.registerCommand('CZDiac.remove', () => {
        // Get the active text editor
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const document = editor.document;
            const selection = editor.selection;

            // Get the word within the selection
            const text = document.getText(selection);
            let result = '';
            for (let i = 0; i < text.length; i++)
            {
                let ind = sdiak.indexOf(text.charAt(i));
                if (ind !== -1){
                    result += bdiak.charAt(ind);
                }
                else{
                    result += text.charAt(i);
                }
            }            
            editor.edit(editBuilder => {
                editBuilder.replace(selection, result);
            });
        }
    });

    context.subscriptions.push(removeCmd);

    let num2letters = vscode.commands.registerCommand('CZDiac.num2diac', () => {
        // Get the active text editor
        const editor = vscode.window.activeTextEditor;

        if (editor) {
            const document = editor.document;
            const selection = editor.selection;

            // Get the word within the selection
            const text = document.getText(selection);
            let result = '';
            for (let i = 0; i < text.length; i++)
            {
                let ind = numbers.indexOf(text.charAt(i));
                if (ind !== -1){
                    result += letters.charAt(ind);
                }
                else{
                    result += text.charAt(i);
                }
            }            
            editor.edit(editBuilder => {
                editBuilder.replace(selection, result);
            });
        }
    });

    context.subscriptions.push(num2letters);
}

// this method is called when your extension is deactivated
export function deactivate() {}
