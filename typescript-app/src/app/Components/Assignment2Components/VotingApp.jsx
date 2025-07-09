// 12.Create a simple voting application using the useReducer hook.
// Set up a reducer to manage the votes for different options.
// Create buttons representing voting options.
// Use the useReducer hook to access the votes state and dispatch actions.
// Allow users to vote for their preferred options.
// Display the current vote count for each option.

"use client";
import { useReducer } from "react";

const initial = {
  A: 0,
  B: 0,
  C: 0,
};

function voteReducer(state, action) {
  switch (action.type) {
    case "VOTE_OPTION_A":
      return { ...state, A: state.A + 1 };
    case "VOTE_OPTION_B":
      return { ...state, B: state.B + 1 };
    case "VOTE_OPTION_C":
      return { ...state, C: state.C + 1 };
    default:
      return state;
  }
}

function VotingApp() {
  const [state, dispatch] = useReducer(voteReducer, initial);

  return (
    <div >
      <h2>vote</h2>

      <div>
        <button onClick={() => dispatch({ type: "VOTE_OPTION_A" })}>
          vote BJP
        </button>
        <button onClick={() => dispatch({ type: "VOTE_OPTION_B" })}>
          Vote AAP
        </button>
        <button onClick={() => dispatch({ type: "VOTE_OPTION_C" })}>
          Vote Congress
        </button>
      </div>

      <h3>Current Votes:</h3>
      <ul>
        <li>vote BJP: {state.A}</li>
        <li>Vote AAP: {state.B}</li>
        <li>Vote Congress: {state.C}</li>
      </ul>
    </div>
  );
}

export default VotingApp;
