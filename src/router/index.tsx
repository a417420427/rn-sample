
import loadable from "@loadable/component";


import * as React from "react";
import { Route } from "react-router-dom";

export const NestedRoute = (route) => (
  <Route path={route.path} exact={route.exact}
    /*渲染路由对应的视图组件，将路由组件的props传递给视图组件*/
    render={(props) => <route.component {...props} router={route.routes}/>}
  />
);

export const router = [
  {
    path: "/home",
    component: loadable(() => import("../containers/Home"))
  },
  {
    path: "/write",
    component: loadable( () => import("../containers/Write"))
  },
  {
    path: "/login",
    component: loadable(() => import("../containers/Login"))
  },
  {
    path: "/signup",
    component: loadable(() => import("../containers/Signup")),
    // exact: true,
    // asyncData(store) {
    //   return store.dispatch(fatchTopList());
    // }
  }
];

