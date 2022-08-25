const MURDER_AT_CASTLE_NATHRIA: "Murder%20at%20Castle%20Nathria" =
  "Murder%20at%20Castle%20Nathria";
const VOYAGE_TO_THE_SUNKEN_CITY: "Voyage%20to%20the%20Sunken%20City" =
  "Voyage%20to%20the%20Sunken%20City";
const FRACTURED_IN_ALTERAC_VALLEY: "Fractured%20in%20Alterac%20Valley" =
  "Fractured%20in%20Alterac%20Valley";
const UNITED_IN_STORMWIND: "United%20in%20Stormwind" = "United%20in%20Stormwind";
const FORGED_IN_THE_BARRENS: "Forged%20in%20the%20Barrens" =
  "Forged%20in%20the%20Barrens";
const CORE: "%22Core%22" = "%22Core%22";

interface IClass {
  demonHunter: "Demon Hunter";
  druid: "Druid";
  hunter: "Hunter";
  mage: "Mage";
  paladin: "Paladin";
  priest: "Priest";
  rogue: "Rogue";
  shaman: "Shaman";
  warlock: "Warlock";
  warrior: "Warrior";
  neutral: "Neutral";
}

const classList: IClass = {
  demonHunter: "Demon Hunter",
  druid: "Druid",
  hunter: "Hunter",
  mage: "Mage",
  paladin: "Paladin",
  priest: "Priest",
  rogue: "Rogue",
  shaman: "Shaman",
  warlock: "Warlock",
  warrior: "Warrior",
  neutral: "Neutral",
};

interface IqualitiesList {
  common: "Common";
  rare: "Rare";
  epic: "Epic";
  legendary: "Legendary";
}

const qualitiesList: IqualitiesList = {
  common: "Common",
  rare: "Rare",
  epic: "Epic",
  legendary: "Legendary",
};

export {
  MURDER_AT_CASTLE_NATHRIA,
  VOYAGE_TO_THE_SUNKEN_CITY,
  FRACTURED_IN_ALTERAC_VALLEY,
  UNITED_IN_STORMWIND,
  FORGED_IN_THE_BARRENS,
  CORE,
  classList,
  qualitiesList,
};
