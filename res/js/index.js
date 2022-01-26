import renderSkillCoreExpTable from "./skillCoreExpTable.js";
import renderReinCoreExpTable from "./reinCoreExpTable.js";

const tablinks = document.querySelectorAll(".tablinks");

const openTabContent = function(e, tabName){
    console.log("hello function");
  let i, tabcontent, tablinks;

  tabcontent = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.querySelectorAll(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.querySelector("#"+tabName).style.display = "block";
  e.currentTarget.className += " active";    
};

tablinks.forEach((item)=>{
    item.addEventListener("click",function(e){
        openTabContent(e,item.value);
    });
});

// 필요한 코어 젬스톤 = Math.floor((목표레벨의 누적경험치 - 현재레벨의 누적 경험치)/50)
const CORE_EXP = 55;        // 스킬/강화 코어 1레벨 기준 요구경험치

const skill_required_exp = [0]; // 스킬 코어 레벨간 요구경험치 리스트
const skill_reduced_exp = [0];  // 스킬 코어 레벨간 누적경험치 리스트
const SKILL_EXP_DIFF = 5;       // 스킬 코어 요구경험치 공차

const rein_required_exp = [0];  // 강화 코어 레벨간 요구경험치 리스트
const rein_reduced_exp = [0];   // 강화 코어 레벨간 누적경험치 리스트
const REIN_EXP_DIFF = 15;       // 강화 코어 요구경험치 공차

// 요구경험치/누적경험치 리스트 계산
for(let i=1;i<=25;i++)
{
    skill_required_exp.push(CORE_EXP+(i-1)*SKILL_EXP_DIFF);
    skill_reduced_exp.push(skill_required_exp[i-1]+skill_reduced_exp[i-1]);

    rein_required_exp.push(CORE_EXP+(i-1)*REIN_EXP_DIFF);
    rein_reduced_exp.push(rein_required_exp[i-1]+rein_reduced_exp[i-1]);
}


const category = document.querySelector("#category");           // 구분
const curLevel = document.querySelector("#curLevel");           // 현재 레벨
const targetLevel = document.querySelector("#targetLevel");     // 목표 레벨
const result = document.querySelector("#result");               // 계산결과

const cal = function(e){
    const c = category.options[category.selectedIndex].value;

    if(checkInput(curLevel.value) && checkInput(targetLevel.value))
    {
        result.value = c==="skill" ? skillCal() : reinCal();
    }
    else
    {
        alert("현재 레벨 또는 목표 레벨의 올바른 범위를 입력해주세요. (1~25)");
    }
};

const checkInput = function(level){
    if(level>=1 && level<=25)
    {
        return true;
    }
    else
    {
        return false;
    }
};

// 스킬 코어 강화 계산
const skillCal = function(e){
    return Math.ceil((skill_reduced_exp[targetLevel.value] - (skill_reduced_exp[curLevel.value]))/50);
};
// 강화 코어 강화 계산
const reinCal = function(e){
    return Math.ceil((rein_reduced_exp[targetLevel.value] - (rein_reduced_exp[curLevel.value]))/50);
};

const calBtn = document.querySelector("#calBtn");
calBtn.addEventListener("click",cal);

document.querySelector("#defaultOpen").click();
renderSkillCoreExpTable();
renderReinCoreExpTable();

