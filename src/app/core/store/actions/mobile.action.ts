import { createAction, props } from '@ngrx/store';


export const controlMobileQueue = createAction('[mobile] load MobileQueue', props<{ mobileQueue: boolean }>());
export const controlMobileTabs = createAction('[mobile] load MobileTabs flag', props<{ mobileTabs: boolean }>());
export const controlMobileVisor = createAction('[mobile] load mobileVisor', props<{ mobileVisor: boolean }>());
export const controlIsMobile = createAction('[mobile] load isMobile', props<{ isMobile: boolean }>());

export const resetMobileStore = createAction('[mobile] reset store', props<any>());
