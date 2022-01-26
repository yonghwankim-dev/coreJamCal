import CoreExp from "./CoreExp.js";

const rowCnt = 25;
const colCnt = 6;    

// 스킬코어 경험치 리스트 생성
const createSkillCoreExpList = function(){
    let coreExpList = [null];
    let coreExp;

    for(let i=1; i<=rowCnt; i++)
    {  
        coreExp = new CoreExp(i,
                        CoreExp.getRequiredExp(i, "skill"),
                        CoreExp.getReducedExp(i, "skill"),
                        CoreExp.getSkillDecomNum(i),
                        CoreExp.getReducedCore(i),
                        CoreExp.getReduceCondenCore(i));

        coreExpList.push(coreExp);
    }
    return coreExpList;
}

const renderSkillCoreExpTable = function(){
    const tbody = document.querySelector(".table tbody");
    let tr,td;

    const skillCoreExpList = createSkillCoreExpList();
    const columnNames = [null,"level","requiredExp","reducedExp","decomNum","reducedCore","reducedCondenCore"];

    for(let i=1; i<=rowCnt; i++)
    {
        tr = document.createElement("tr");


        for(let j=1; j<=colCnt;j++)
        {
            td = document.createElement("td");
            td.textContent = skillCoreExpList[i][columnNames[j]];

            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

renderSkillCoreExpTable();
