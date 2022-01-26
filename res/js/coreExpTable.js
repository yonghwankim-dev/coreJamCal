import CoreExp from "./CoreExp.js";

const rowCnt = 25;
const colCnt = 6;    

// 스킬코어 경험치 리스트 생성
const calExp = function(){
    let skillCoreExpList = [null];
    let coreExp;

    for(let i=1; i<=rowCnt; i++)
    {  
        coreExp = new CoreExp(i,
                        CoreExp.getRequiredExp(i),
                        CoreExp.getReducedExp(i),
                        0,
                        CoreExp.getReducedCore(i),
                        CoreExp.getReduceCondenCore(i));

        skillCoreExpList.push(coreExp);
    }
    console.log(skillCoreExpList);
    return skillCoreExpList;
}



const renderSkillCoreExpTable = function(){
    const tbody = document.querySelector(".table tbody");
    let tr,td;

}

//renderSkillCoreExpTable();

calExp();