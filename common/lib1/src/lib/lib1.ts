export class Nx19Library {
  constructor(private isDesktop: boolean) {}
  getIsDesktop = (): boolean => this.isDesktop;
}
