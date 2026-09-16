export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export const stats: Stat[] = [
  { label: "Years of Experience", value: 3, suffix: "+" },
  { label: "Successful Projects", value: 700, suffix: "+" },
  { label: "Brands Transformed", value: 450, suffix: "+" },
  { label: "Campaigns Launched", value: 1010, suffix: "+" },
];
