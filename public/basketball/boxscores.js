// Box score data for each game (template for two teams, centered)
const boxScores = {
  "w2g1": `
    <button class="close-details-btn" onclick="closeGameDetails('week-2')">Close</button>
    <h3 style="margin-top:0;text-align:center;">Team 1 (16) vs Team 2 (15)</h3>
    <div class="game-details-tables">
      <div class="game-details-table-block">
        <div class="game-details-table-title">Team 1</div>
        <table class="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>FG</th>
              <th>3PT</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Aaron</td><td>1-7</td><td>0-0</td><td>8</td><td>3</td><td>1</td><td>0</td><td>1</td><td>2</td></tr>
            <tr><td>Brandon</td><td>2-8</td><td>1-4</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>5</td></tr>
            <tr><td>Cliff</td><td>1-6</td><td>1-2</td><td>2</td><td>0</td><td>2</td><td>0</td><td>0</td><td>3</td></tr>
            <tr><td>CJ</td><td>1-6</td><td>1-5</td><td>0</td><td>1</td><td>2</td><td>0</td><td>0</td><td>3</td></tr>
            <tr><td>Tony Shin</td><td>1-6</td><td>1-2</td><td>3</td><td>3</td><td>1</td><td>0</td><td>0</td><td>3</td></tr>
          </tbody>
        </table>
      </div>
      <div class="game-details-table-block">
        <div class="game-details-table-title">Team 2</div>
        <table class="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>FG</th>
              <th>3PT</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Andrew</td><td>2-5</td><td>0-2</td><td>2</td><td>3</td><td>0</td><td>0</td><td>2</td><td>4</td></tr>
            <tr><td>Brian</td><td>1-2</td><td>0-0</td><td>0</td><td>0</td><td>0</td><td>2</td><td>1</td><td>2</td></tr>
            <tr><td>Tony Lam</td><td>2-4</td><td>1-3</td><td>2</td><td>2</td><td>1</td><td>0</td><td>1</td><td>5</td></tr>
            <tr><td>Thomas</td><td>1-3</td><td>0-2</td><td>3</td><td>0</td><td>0</td><td>0</td><td>2</td><td>2</td></tr>
            <tr><td>Vinh</td><td>1-3</td><td>0-2</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>2</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  "w1g1": `
    <button class="close-details-btn" onclick="closeGameDetails('week-1')">Close</button>
    <h3 style="margin-top:0;text-align:center;">Team A (16) vs Team B (13)</h3>
    <div class="game-details-tables">
      <div class="game-details-table-block">
        <div class="game-details-table-title">Team A</div>
        <table class="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>FG</th>
              <th>3PT</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Aaron</td><td>1-7</td><td>0-0</td><td>8</td><td>3</td><td>1</td><td>0</td><td>0</td><td>2</td></tr>
            <tr><td>Brandon</td><td>2-8</td><td>1-4</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>5</td></tr>
            <tr><td>Cliff</td><td>1-3</td><td>1-2</td><td>2</td><td>0</td><td>2</td><td>0</td><td>0</td><td>3</td></tr>
            <tr><td>CJ</td><td>1-6</td><td>1-5</td><td>0</td><td>1</td><td>2</td><td>0</td><td>0</td><td>3</td></tr>
            <tr><td>Tony Shin</td><td>1-3</td><td>1-2</td><td>3</td><td>3</td><td>1</td><td>0</td><td>0</td><td>3</td></tr>
          </tbody>
        </table>
      </div>
      <div class="game-details-table-block">
        <div class="game-details-table-title">Team B</div>
        <table class="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>FG</th>
              <th>3PT</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Andrew</td><td>2-5</td><td>0-0</td><td>2</td><td>3</td><td>0</td><td>0</td><td>2</td><td>4</td></tr>
            <tr><td>Brian</td><td>1-2</td><td>0-0</td><td>0</td><td>0</td><td>0</td><td>2</td><td>1</td><td>2</td></tr>
            <tr><td>Tony Lam</td><td>2-4</td><td>1-3</td><td>2</td><td>2</td><td>1</td><td>0</td><td>1</td><td>5</td></tr>
            <tr><td>Thomas</td><td>1-3</td><td>0-2</td><td>3</td><td>0</td><td>0</td><td>0</td><td>2</td><td>2</td></tr>
            <tr><td>Vinh</td><td>1-3</td><td>0-2</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>2</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  "w1g2": `
    <button class="close-details-btn" onclick="closeGameDetails('week-1')">Close</button>
    <h3 style="margin-top:0;text-align:center;">Team A (21) vs Team B (6)</h3>
    <div class="game-details-tables">
      <div class="game-details-table-block">
        <div class="game-details-table-title">Team A</div>
        <table class="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>FG</th>
              <th>3PT</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Aaron</td><td>1-3</td><td>0-0</td><td>4</td><td>1</td><td>0</td><td>0</td><td>0</td><td>2</td></tr>
            <tr><td>Brandon</td><td>1-2</td><td>0-1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>2</td></tr>
            <tr><td>Cliff</td><td>2-4</td><td>2-3</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>6</td></tr>
            <tr><td>CJ</td><td>3-5</td><td>3-5</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>9</td></tr>
            <tr><td>Tony Shin</td><td>1-2</td><td>0-1</td><td>1</td><td>2</td><td>0</td><td>0</td><td>0</td><td>2</td></tr>
          </tbody>
        </table>
      </div>
      <div class="game-details-table-block">
        <div class="game-details-table-title">Team B</div>
        <table class="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>FG</th>
              <th>3PT</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Andrew</td><td>0-3</td><td>0-0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>Daryl</td><td>0-3</td><td>0-0</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>Sea</td><td>1-1</td><td>0-0</td><td>4</td><td>0</td><td>0</td><td>0</td><td>1</td><td>2</td></tr>
            <tr><td>Tony Lam</td><td>1-1</td><td>0-0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td><td>2</td></tr>
            <tr><td>Thomas</td><td>1-4</td><td>0-1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>2</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  "w1g3": `
    <button class="close-details-btn" onclick="closeGameDetails('week-1')">Close</button>
    <h3 style="margin-top:0;text-align:center;">Team A (21) vs Team B (13)</h3>
    <div class="game-details-tables">
      <div class="game-details-table-block">
        <div class="game-details-table-title">Team A</div>
        <table class="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>FG</th>
              <th>3PT</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Aaron</td><td>1-1</td><td>0-0</td><td>3</td><td>2</td><td>1</td><td>0</td><td>0</td><td>2</td></tr>
            <tr><td>Brandon</td><td>2-5</td><td>1-2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>5</td></tr>
            <tr><td>Cliff</td><td>2-5</td><td>0-2</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>4</td></tr>
            <tr><td>CJ</td><td>1-3</td><td>1-3</td><td>2</td><td>1</td><td>0</td><td>0</td><td>0</td><td>3</td></tr>
            <tr><td>Tony Shin</td><td>3-4</td><td>1-2</td><td>1</td><td>1</td><td>3</td><td>1</td><td>0</td><td>7</td></tr>
          </tbody>
        </table>
      </div>
      <div class="game-details-table-block">
        <div class="game-details-table-title">Team B</div>
        <table class="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>FG</th>
              <th>3PT</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Andrew</td><td>2-3</td><td>0-1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>4</td></tr>
            <tr><td>Brian</td><td>2-3</td><td>0-0</td><td>5</td><td>2</td><td>2</td><td>0</td><td>3</td><td>4</td></tr>
            <tr><td>Tony Lam</td><td>0-5</td><td>0-5</td><td>4</td><td>2</td><td>0</td><td>0</td><td>2</td><td>0</td></tr>
            <tr><td>Sea</td><td>0-0</td><td>0-0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>Vinh</td><td>2-6</td><td>1-3</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>5</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  "w1g4": `
    <button class="close-details-btn" onclick="closeGameDetails('week-1')">Close</button>
    <h3 style="margin-top:0;text-align:center;">Team A (21) vs Team B (13)</h3>
    <div class="game-details-tables">
      <div class="game-details-table-block">
        <div class="game-details-table-title">Team A</div>
        <table class="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>FG</th>
              <th>3PT</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Aaron</td><td>4-5</td><td>0-0</td><td>5</td><td>0</td><td>0</td><td>1</td><td>1</td><td>8</td></tr>
            <tr><td>Cliff</td><td>2-4</td><td>1-1</td><td>1</td><td>3</td><td>3</td><td>0</td><td>1</td><td>5</td></tr>
            <tr><td>CJ</td><td>2-4</td><td>2-4</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>6</td></tr>
            <tr><td>Daryl</td><td>0-3</td><td>0-2</td><td>2</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>Thomas</td><td>1-4</td><td>0-3</td><td>2</td><td>1</td><td>0</td><td>0</td><td>0</td><td>2</td></tr>
          </tbody>
        </table>
      </div>
      <div class="game-details-table-block">
        <div class="game-details-table-title">Team B</div>
        <table class="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>FG</th>
              <th>3PT</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Andrew</td><td>3-6</td><td>0-1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>6</td></tr>
            <tr><td>Brian</td><td>1-2</td><td>0-1</td><td>4</td><td>2</td><td>0</td><td>0</td><td>1</td><td>2</td></tr>
            <tr><td>Tony Lam</td><td>1-4</td><td>0-1</td><td>3</td><td>1</td><td>1</td><td>0</td><td>1</td><td>2</td></tr>
            <tr><td>Sea</td><td>0-2</td><td>0-2</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>
            <tr><td>Vinh</td><td>1-4</td><td>1-4</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>3</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  "w1g5": `
    <button class="close-details-btn" onclick="closeGameDetails('week-1')">Close</button>
    <h3 style="margin-top:0;text-align:center;">Team A (21) vs Team B (8)</h3>
    <div class="game-details-tables">
      <div class="game-details-table-block">
        <div class="game-details-table-title">Team A</div>
        <table class="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>FG</th>
              <th>3PT</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Aaron</td><td>2-5</td><td>0-1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>4</td></tr>
            <tr><td>Cliff</td><td>1-2</td><td>0-0</td><td>3</td><td>4</td><td>0</td><td>0</td><td>1</td><td>2</td></tr>
            <tr><td>CJ</td><td>1-2</td><td>1-2</td><td>2</td><td>1</td><td>0</td><td>0</td><td>0</td><td>3</td></tr>
            <tr><td>Tony Shin</td><td>3-3</td><td>2-2</td><td>3</td><td>2</td><td>0</td><td>0</td><td>0</td><td>8</td></tr>
            <tr><td>Thomas</td><td>2-5</td><td>0-0</td><td>4</td><td>2</td><td>1</td><td>0</td><td>1</td><td>4</td></tr>
          </tbody>
        </table>
      </div>
      <div class="game-details-table-block">
        <div class="game-details-table-title">Team B</div>
        <table class="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>FG</th>
              <th>3PT</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Andrew Tang</td><td>0-2</td><td>0-0</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>Brandon</td><td>1-4</td><td>1-3</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>3</td></tr>
            <tr><td>Brian</td><td>0-0</td><td>0-0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>
            <tr><td>Tony Lam</td><td>2-5</td><td>1-2</td><td>2</td><td>1</td><td>0</td><td>0</td><td>1</td><td>5</td></tr>
            <tr><td>Vinh</td><td>0-4</td><td>0-3</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  "w1g6": `
    <button class="close-details-btn" onclick="closeGameDetails('week-1')">Close</button>
    <h3 style="margin-top:0;text-align:center;">Team A (16) vs Team B (21)</h3>
    <div class="game-details-tables">
      <div class="game-details-table-block">
        <div class="game-details-table-title">Team A</div>
        <table class="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>FG</th>
              <th>3PT</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Aaron</td><td>3-4</td><td>0-0</td><td>4</td><td>0</td><td>1</td><td>0</td><td>2</td><td>6</td></tr>
            <tr><td>Cliff</td><td>0-8</td><td>0-5</td><td>5</td><td>3</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
            <tr><td>CJ</td><td>1-5</td><td>0-3</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>2</td></tr>
            <tr><td>Tony Shin</td><td>2-4</td><td>2-2</td><td>2</td><td>2</td><td>0</td><td>0</td><td>0</td><td>6</td></tr>
            <tr><td>Thomas</td><td>1-3</td><td>0-1</td><td>1</td><td>0</td><td>4</td><td>0</td><td>1</td><td>2</td></tr>
          </tbody>
        </table>
      </div>
      <div class="game-details-table-block">
        <div class="game-details-table-title">Team B</div>
        <table class="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>FG</th>
              <th>3PT</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Andrew</td><td>3-8</td><td>0-1</td><td>3</td><td>0</td><td>0</td><td>0</td><td>1</td><td>6</td></tr>
            <tr><td>Brian</td><td>2-3</td><td>0-0</td><td>3</td><td>2</td><td>3</td><td>1</td><td>0</td><td>4</td></tr>
            <tr><td>Daryl</td><td>1-4</td><td>0-0</td><td>2</td><td>2</td><td>0</td><td>1</td><td>1</td><td>2</td></tr>
            <tr><td>Sea</td><td>2-2</td><td>0-0</td><td>5</td><td>1</td><td>0</td><td>0</td><td>3</td><td>4</td></tr>
            <tr><td>Tony Lam</td><td>2-6</td><td>1-3</td><td>2</td><td>2</td><td>1</td><td>0</td><td>2</td><td>5</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  "w1g7": `
    <button class="close-details-btn" onclick="closeGameDetails('week-1')">Close</button>
    <h3 style="margin-top:0;text-align:center;">Team A (13) vs Team B (21)</h3>
    <div class="game-details-tables">
      <div class="game-details-table-block">
        <div class="game-details-table-title">Team A</div>
        <table class="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>FG</th>
              <th>3PT</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Andrew Tang</td><td>2-6</td><td>0-0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>4</td></tr>
            <tr><td>Brandon</td><td>1-4</td><td>0-1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>2</td></tr>
            <tr><td>Cliff</td><td>1-2</td><td>1-1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>3</td></tr>
            <tr><td>Thomas</td><td>0-0</td><td>0-0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
            <tr><td>Vinh</td><td>2-3</td><td>0-1</td><td>2</td><td>2</td><td>0</td><td>0</td><td>1</td><td>4</td></tr>
          </tbody>
        </table>
      </div>
      <div class="game-details-table-block">
        <div class="game-details-table-title">Team B</div>
        <table class="stats-table">
          <thead>
            <tr>
              <th>Player</th>
              <th>FG</th>
              <th>3PT</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TO</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Aaron</td><td>3-3</td><td>0-0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td>6</td></tr>
            <tr><td>Andrew</td><td>1-1</td><td>0-0</td><td>0</td><td>2</td><td>1</td><td>0</td><td>1</td><td>2</td></tr>
            <tr><td>Brian</td><td>4-5</td><td>1-1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td><td>9</td></tr>
            <tr><td>Tony Lam</td><td>1-1</td><td>0-0</td><td>2</td><td>1</td><td>0</td><td>0</td><td>0</td><td>2</td></tr>
            <tr><td>Tony Shin</td><td>1-1</td><td>0-0</td><td>1</td><td>4</td><td>0</td><td>0</td><td>0</td><td>2</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `
};
