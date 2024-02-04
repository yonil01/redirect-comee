import {ToastStyleModel} from "ecapture-ng-ui/lib/modules/toast/model/toast.model";

export const toastDataStyle: ToastStyleModel = {
  alert: {
    error: 'bg-alert-error',
    info: 'bg-alert-info',
    success: 'bg-alert-success',
    warning: 'bg-alert-warning'
  },
  container: {
    color: 'bg-mono-10',
    border: {
      round: 'rounded',
      color: 'border-mono-70',
      size: 'border',
      style: 'border-solid'
    }
  },
  icon: {
    close: {
      color: 'text-black'
    },
    alert: {
      color: 'text-white'
    }
  },
  text: {
    color: 'text-mono-70',
    size: '',
    font: ''
  }
}
