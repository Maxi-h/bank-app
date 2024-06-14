import {createNavigationContainerRef} from '@react-navigation/native';
import {MutableRefObject, createRef, useEffect} from 'react';

export const isMountedRef = createRef<boolean>();

export const navigationRef = createNavigationContainerRef<any>();

export function useNavigationMounting() {
  useEffect(() => {
    (isMountedRef as MutableRefObject<boolean>).current = true;

    return () => {
      (isMountedRef as MutableRefObject<boolean>).current = false;
    };
  }, []);
}

// export function navigate(name: string, params?: object) {
//   if (navigationRef.isReady()) {
//     navigationRef.navigate(name, params);
//   }
// }
