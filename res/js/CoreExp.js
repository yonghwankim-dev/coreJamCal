export default class CoreExp{
    static requExp = 55;          // 1레벨 기준 요구 경험치
    static requSkillExpDiff = 5;  // 스킬코어 등급간 요구경험치 차이
    static requReinExpDiff = 15;  // 스킬코어 등급간 요구경험치 차이
    static skillCoredecomNumList = [0,40,84,132,184,240,
                                300,364,432,504,580,
                                660,744,832,924,1020,
                                1120,1224,1332,1444,1560,
                                1680,1804,1932,2064,2200];  // 스킬코어 분해시 v코어 조각 제공량 리스트
    static reinCoredecomNumList = [0,10,21,35,52,72,
                                95,121,150,182,217,
                                255,296,340,387,437,
                                490,546,605,667,732,
                                800,871,945,1022,1102];     // 강화코어 분해시 v코어 조각 제공량 리스트
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

    static getRequiredExp(level, category){
        const diff = category==="skill" ? this.requSkillExpDiff : this.requReinExpDiff;
        return (level===25 || level===0) ? 0 : this.requExp + (level-1) * diff;
    }
    static getReducedExp(level, category){
        if(level===0)
        {
            return 0;
        }
        return this.getRequiredExp(level-1, category)+this.getReducedExp(level-1, category);
    }

    static getSkillDecomNum(level)
    {
        return this.skillCoredecomNumList[level];
    }

    static getReinDecomNum(level)
    {
        return this.reinCoredecomNumList[level];
    }

    static getReducedCore(level, category){
        return Math.ceil(this.getReducedExp(level,category)/50);
    }
    static getReduceCondenCore(level, category){
        return Math.ceil(this.getReducedExp(level,category)/150);
    }


}