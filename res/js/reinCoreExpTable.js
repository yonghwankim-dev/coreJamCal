import CoreExp from "./CoreExp.js";

const rowCnt = 25;
const colCnt = 6;    

const createReinCoreExpList = function(){
    let coreExpList = [null];
    let coreExp;

    for(let i=1; i<=rowCnt; i++)
    {  
        coreExp = new CoreExp(i,
                        CoreExp.getRequiredExp(i,"rein"),
                        CoreExp.getReducedExp(i,"rein"),
                        CoreExp.getReinDecomNum(i),
                        CoreExp.getReducedCore(i,"rein"),
                        CoreExp.getReduceCondenCore(i,"rein"));

        coreExpList.push(coreExp);
    }
    return coreExpList;
}

const renderReinCoreExpTable = function(){
    const tbody = document.querySelector(".reinTable tbody");
    let tr,td;

    const reinCoreExpList = createReinCoreExpList();
    const columnNames = [null,"level","requiredExp","reducedExp","decomNum","reducedCore","reducedCondenCore"];

    for(let i=1; i<=rowCnt; i++)
    {
        tr = document.createElement("tr");


        for(let j=1; j<=colCnt;j++)
        {
            td = document.createElement("td");
            td.textContent = reinCoreExpList[i][columnNames[j]];

            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

export default renderReinCoreExpTable;
