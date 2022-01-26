export default class CoreExp{
    static requExp = 55;          // 1레벨 기준 요구 경험치
    static requSkillExpDiff = 5;  // 스킬코어 등급간 요구경험치 차이

    // level : 코어 등급
    // requiredExp : 요구 경험치
    // reducedExp : 누적 경험치
    // decomNum : 분해시 V코어 조각 제공량
    // reducedCore : 누적 코어 필요량
    // reducedCondenCore : 누적 응축된 경험 필요량
    constructor(level, requiredExp, reducedExp, decomNum, reducedCore, reducedCondenCore)
    {
        this.level = level;
        this.requiredExp = requiredExp;
        this.reducedExp = reducedExp;
        this.decomNum = decomNum;
        this.reducedCore = reducedCore;
        this.reducedCondenCore = reducedCondenCore;
    }

    static getRequiredExp(level){
        return (level===25 || level===0) ? 0 : this.requExp + (level-1) * this.requSkillExpDiff;
    }
    static getReducedExp(level){
        if(level===0)
        {
            return 0;
        }
        return this.getRequiredExp(level-1)+this.getReducedExp(level-1);
    }
    static getReducedCore(level){
        return Math.ceil(this.getReducedExp(level)/50);
    }
    static getReduceCondenCore(level){
        return Math.ceil(this.getReducedExp(level)/150);
    }
}