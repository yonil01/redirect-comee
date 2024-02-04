import { createReducer, on } from '@ngrx/store';
import {
  controlMobileQueue,
  controlMobileTabs,
  controlMobileVisor,
  controlIsMobile,
  resetMobileStore,
} from '../actions/mobile.action';

export interface Mobile {
  mobileQueue: boolean;
  mobileTabs: boolean;
  mobileVisor: boolean;
  isMobile: boolean;
  mobileViewer: string;
}

export const MobileInitialState: Mobile = {
  mobileQueue: true,
  mobileTabs: false,
  mobileVisor: false,
  isMobile: false,
  mobileViewer: 'process-queue',
};

const mobileReducer = createReducer(
  MobileInitialState,
  on(controlMobileQueue, (state, { mobileQueue }) => ({
    ...state,
    mobileQueue,
  })),
  on(controlMobileVisor, (state, { mobileVisor }) => ({
    ...state,
    mobileVisor,
  })),
  on(controlMobileTabs, (state, { mobileTabs }) => ({
    ...state,
    mobileTabs,
  })),
  on(controlIsMobile, (state, { isMobile }) => ({
    ...state,
    isMobile,
  })),
  on(resetMobileStore, (state) => ({
    ...state,
    ...MobileInitialState,
  })),
);

export function MobileReducer(state: any, action: any) {
  return mobileReducer(state, action);
}
