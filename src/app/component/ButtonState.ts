import { Cell, Cells, Plugin } from 'insci-notebook';
import { App } from '../App';
@Plugin
class ButtonState {
    cellTypes: string[]=[];
    postNotebookInit() {
        Object.keys(Cells.builtins).forEach(key => {
            this.cellTypes.push(key);
        });
        Object.keys(Cells.plugins).forEach(key => {
            this.cellTypes.push(key);
        });
        for(const type of this.cellTypes){
            const opt:HTMLOptionElement=document.createElement("option");
            opt.textContent=type.charAt(0).toUpperCase()+type.slice(1);
            opt.value=type;
            App.instance().typeSelector.appendChild(opt);
        }
        App.instance().typeSelector.onchange = (e: Event) => { App.instance().notebook.newCell(App.instance().notebook.activeCell, (e.currentTarget as HTMLSelectElement).value); }
    }
    onSelectCell(cell: Cell) {
        App.instance().typeSelector.value = cell.type;
    }
}