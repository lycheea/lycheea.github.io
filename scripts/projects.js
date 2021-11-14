const api_url = "https://api.github.com/orgs/lycheea/repos";

async function fetch_info(url) {
  
    const response = await fetch(url);

    var data = await response.json();

    let repos = data.sort(function(a, b) { return new Date(b.pushed_at) - new Date(a.pushed_at); }).filter(function(i) { return i.owner.login == "Minh-Ton" && i.name !== "minh-ton.github.io" && i.name !== "Minh-Ton"; });
  
    show(repos);
}

function show(data) {

    var tab = `
    <div class="container"></br>
      <div class="columns is-multiline is-desktop">
        <div class="column">
          <div class="box project-text">
            <a href="${data[0].html_url}" target="_blank" rel="noreferrer">
              <article>
                <div>
                  <p>
                  <div align=center>
                    <h1><b><span>${data[0].name}</span></b>
                    <br>${(data[0].language == null) ? `<span style="background-color:rgba(7, 59, 79, 0.5);color:white;font-weight:bold;font-size:0.8em;border: 1px solid rgba(7, 59, 79, 0.5);border-radius: 5px;">&nbsp>_>&nbsp</span>` : `<span style="background-color:rgba(7, 59, 79, 0.5);color:white;font-weight:bold;font-size:0.8em;border: 1px solid rgba(7, 59, 79, 0.5);border-radius: 5px;">&nbsp${data[0].language}&nbsp</span> <span style="background-color:rgba(7, 59, 79, 0.5);color:white;font-weight:bold;font-size:0.8em;border: 1px solid rgba(7, 59, 79, 0.5);border-radius: 5px;">&nbsp&#9733 ${data[0].stargazers_count}&nbsp</span>`}
                  </div>
                  <div align=center style="border-top: 10px solid transparent;">
                    <p align=center>
                    ${data[0].description}
                    </p>
                  </div>
                  </p>
                </div>
              </article>
            </a>
          </div>
        </div>

        <div class="column">
          <div class="box project-text">
            <a href="${data[1].html_url}" target="_blank" rel="noreferrer">
              <article>
                <div>
                  <p>
                  <div align=center>
                    <h1><b><span>${data[1].name}</span></b>
                    <br>${(data[1].language == null) ? `<span style="background-color:rgba(7, 59, 79, 0.5);color:white;font-weight:bold;font-size:0.8em;border: 1px solid rgba(7, 59, 79, 0.5);border-radius: 5px;">&nbsp>_>&nbsp</span>` : `<span style="background-color:rgba(7, 59, 79, 0.5);color:white;font-weight:bold;font-size:0.8em;border: 1px solid rgba(7, 59, 79, 0.5);border-radius: 5px;">&nbsp${data[1].language}&nbsp</span> <span style="background-color:rgba(7, 59, 79, 0.5);color:white;font-weight:bold;font-size:0.8em;border: 1px solid rgba(7, 59, 79, 0.5);border-radius: 5px;">&nbsp&#9733 ${data[1].stargazers_count}&nbsp</span>`}
                  </div>
                  <div align=center style="border-top: 10px solid transparent;">
                    <p align=center>
                    ${data[1].description}
                    </p>
                  </div>
                  </p>
                </div>
              </article>
            </a>
          </div>
        </div>

        <div class="column">
      <div class="box project-text">
        <a href="${data[2].html_url}" target="_blank" rel="noreferrer">
          <article>
            <div>
              <p>
              <div align=center>
                <h1><b><span>${data[2].name}</span></b>
                <br>${(data[2].language == null) ? `<span style="background-color:rgba(7, 59, 79, 0.5);color:white;font-weight:bold;font-size:0.8em;border: 1px solid rgba(7, 59, 79, 0.5);border-radius: 5px;">&nbsp>_>&nbsp</span>` : `<span style="background-color:rgba(7, 59, 79, 0.5);color:white;font-weight:bold;font-size:0.8em;border: 1px solid rgba(7, 59, 79, 0.5);border-radius: 5px;">&nbsp${data[2].language}&nbsp</span> <span style="background-color:rgba(7, 59, 79, 0.5);color:white;font-weight:bold;font-size:0.8em;border: 1px solid rgba(7, 59, 79, 0.5);border-radius: 5px;">&nbsp&#9733 ${data[2].stargazers_count}&nbsp</span>`}
              </div>
              <div align=center style="border-top: 10px solid transparent;">
                <p align=center>
                ${data[2].description}
                </p>
              </div>
              </p>
            </div>
          </article>
        </a>
      </div>
    </div>

    </div>
    </div>

    <div class="container"></br>
      <div class="columns is-multiline is-desktop">
      <div class="column">
      <div class="box project-text">
        <a href="${data[3].html_url}" target="_blank" rel="noreferrer">
          <article>
            <div>
              <p>
              <div align=center>
                <h1><b><span>${data[3].name}</span></b>
                <br>${(data[3].language == null) ? `<span style="background-color:rgba(7, 59, 79, 0.5);color:white;font-weight:bold;font-size:0.8em;border: 1px solid rgba(7, 59, 79, 0.5);border-radius: 5px;">&nbsp>_>&nbsp</span>` : `<span style="background-color:rgba(7, 59, 79, 0.5);color:white;font-weight:bold;font-size:0.8em;border: 1px solid rgba(7, 59, 79, 0.5);border-radius: 5px;">&nbsp${data[3].language}&nbsp</span> <span style="background-color:rgba(7, 59, 79, 0.5);color:white;font-weight:bold;font-size:0.8em;border: 1px solid rgba(7, 59, 79, 0.5);border-radius: 5px;">&nbsp&#9733 ${data[3].stargazers_count}&nbsp</span>`}
              </div>
              <div align=center style="border-top: 10px solid transparent;">
                <p align=center>
                ${data[3].description}
                </p>
              </div>
              </p>
            </div>
          </article>
        </a>
      </div>
    </div>

    <div class="column">
      <div class="box project-text">
        <a href="${data[4].html_url}" target="_blank" rel="noreferrer">
          <article>
            <div>
              <p>
              <div align=center>
                <h1><b><span>${data[4].name}</span></b>
                <br>${(data[4].language == null) ? `<span style="background-color:rgba(7, 59, 79, 0.5);color:white;font-weight:bold;font-size:0.8em;border: 1px solid rgba(7, 59, 79, 0.5);border-radius: 5px;">&nbsp>_>&nbsp</span>` : `<span style="background-color:rgba(7, 59, 79, 0.5);color:white;font-weight:bold;font-size:0.8em;border: 1px solid rgba(7, 59, 79, 0.5);border-radius: 5px;">&nbsp${data[4].language}&nbsp</span> <span style="background-color:rgba(7, 59, 79, 0.5);color:white;font-weight:bold;font-size:0.8em;border: 1px solid rgba(7, 59, 79, 0.5);border-radius: 5px;">&nbsp&#9733 ${data[4].stargazers_count}&nbsp</span>`}
              </div>
              <div align=center style="border-top: 10px solid transparent;">
                <p align=center>
                ${data[4].description}
                </p>
              </div>
              </p>
            </div>
          </article>
        </a>
      </div>
    </div>

    <div class="column">
      <div class="box project-text">
        <a href="${data[5].html_url}" target="_blank" rel="noreferrer">
          <article>
            <div>
              <p>
              <div align=center>
                <h1><b><span>${data[5].name}</span></b>
                <br>${(data[5].language == null) ? `<span style="background-color:rgba(7, 59, 79, 0.5);color:white;font-weight:bold;font-size:0.8em;border: 1px solid rgba(7, 59, 79, 0.5);border-radius: 5px;">&nbsp>_>&nbsp</span>` : `<span style="background-color:rgba(7, 59, 79, 0.5);color:white;font-weight:bold;font-size:0.8em;border: 1px solid rgba(7, 59, 79, 0.5);border-radius: 5px;">&nbsp${data[5].language}&nbsp</span> <span style="background-color:rgba(7, 59, 79, 0.5);color:white;font-weight:bold;font-size:0.8em;border: 1px solid rgba(7, 59, 79, 0.5);border-radius: 5px;">&nbsp&#9733 ${data[5].stargazers_count}&nbsp</span>`}
              </div>
              <div align=center style="border-top: 10px solid transparent;">
                <p align=center>
                ${data[5].description}
                </p>
              </div>
              </p>
            </div>
          </article>
        </a>
      </div>
    </div>

    </div>
    </div>
        `
        
    document.getElementById("repositories").innerHTML = tab;
}

fetch_info(api_url);