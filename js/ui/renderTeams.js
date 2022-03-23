export function renderTeams(teamsToRender) {
    const teamContainer = document.querySelector(".team-container");
    teamContainer.innerHTML = "";

    teamsToRender.forEach(function (team) {
        teamContainer.innerHTML += `<div class="team">
                                        <h4>${team.title}</h4>
                                        <p>Price: ${team.price}</p>
                                    </div>`;
    });
}
