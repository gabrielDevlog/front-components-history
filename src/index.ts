import { __getMountedInstance } from "front-components";
import { createBrowserHistory, createMemoryHistory, History } from "history";

let instance: any;

export function getReactRouterHistory(): History<History.PoorMansUnknown> {
  // Lazy-load module, cause we want to wait for the service to be instantiated
  if (!instance) {
    const mountedInstance = __getMountedInstance();

    if (!mountedInstance) {
      throw new Error(
        "Can not initiate react router history before instantiating"
      );
    }

    instance = mountedInstance;
  }

  const history = instance.isControlled
    ? createMemoryHistory()
    : createBrowserHistory();

  // Define history.push for mounted instance, if controlled
  if (instance.isControlled) {
    instance.controls.history.push = function (path: string) {
      history.push(path);
    };
  }

  return history;
}
