import React from "react";

export default interface DevSkill {
  icon: React.ReactNode;
  name: string;
  rate: number;
  favorite?: boolean;
}
