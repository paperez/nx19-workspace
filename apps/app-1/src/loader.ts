import { Nx19Library } from '@nx-19-workspace/common/lib1';

export const mainBody = (): string => ` 
<div class="main__body" data-test="main-body">
  <div class="main__body__container">
    <div class="main__body__container--padding"> 
      <div class="main__body__container__views">${backgroundSkeleton(
        new Nx19Library(true)
      )}
      </div>
    </div>
  </div>
</div>
`;

const backgroundSkeleton = (lib: Nx19Library): string => {
  return `          
      <div class="not-home level-background ${lib.getIsDesktop()}" >
        <div class="main__background--arena loading-background loading-background>
        </div>
      </div>`;
};
