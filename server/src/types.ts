export type Unit = Readonly<{
  /** @format uuid */
  id: string;
  name: string;
  life: number;
}>;

export type UnitProps = Omit<Unit, 'id'>;
