import { renderTeams } from "./renderTeams.js";

export function searchTeams(teams) {
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {
        // console.log(event);

     

        const filteredTeams = teams.filter(function (team) {
            if (team.price < 50 ) {
                return true;
            }
        });

        renderTeams(filteredTeams);
    };
}
