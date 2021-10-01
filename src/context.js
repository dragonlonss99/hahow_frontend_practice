// interface Props {
//     state: object;
//     action: {
//         type: string;
//         payload: number;
//     };
// }
// interface State {
//     heros: Array<object>
// }
// interface Action {
//     type: string;
//     payload: number;
// }

// // type Reducer<State, Action> =
// //   (state: State, action: Action) => State;

// // enum ActionKind {
// //     GET_HEROS = 'GET_HEROS',
// //     GET_HERO_PROFILE = 'GET_HERO_PROFILE',
// //     PATCH_HERO_PROFILE = 'PATCH_HERO_PROFILE',
// // }

// // type Action = {
// //     type: ActionKind,
// //     payload: number
// // }

// // const getHeroAction: Action = {
// //     type: ActionKind.GET_HEROS,
// //     payload: 1
// // }

// // const getHeroProfileAction: Action = {
// //     type: ActionKind.GET_HERO_PROFILE,
// //     payload: 1
// // }

// // const patchHeroProfileAction: Action = {
// //     type: ActionKind.PATCH_HERO_PROFILE,
// //     payload: 1
// // }

// const heroListInitState: State= { heros:[] };
// const heroProfileInitState = {
//     "str": 0,
//     "int": 0,
//     "agi": 0,
//     "luk": 0,
// };
// async function herosReducer(state:State, action:Action) {
//   switch (action.type) {
//     case 'GET_HEROS':
//          const heroList = await axios.get('https://hahow-recruit.herokuapp.com/heroes/1/profile');
//       return { heros: heroList }
//     default:
//       return state
//   }
// };

// async function profileReducer({state, action}: Props) {
//     switch(action.type) {
//         case 'GET_HERO_PROFILE': {
//             const heroId = action.payload;
//             const heroProfile = await axios.get(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`);
//             return Object.assign({}, state, {
//                 heroProfileInitState: heroProfile
//           })
//         }
//         case 'PATCH_HERO_PROFILE': {
//             const heroId = action.payload;
//             await axios.patch(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`);
//         }
//       default:
//         return state
//     }
//   }
