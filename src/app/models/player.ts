/** Class representing a player in this LARP game.
 * @export
 * @class Player
 */
export class Player {

    /** Whether or not this player can be considered active.
     * @type {boolean}
     * @memberof Player
     */
    isActive: boolean;

    /** The ID for this player.
     * @type {string}
     * @memberof Player
     */
    id: string;

    /** The name of this player.
     * @type {string}
     * @memberof Player
     */
    name: string;

    /** The email for this player.
     * @type {string}
     * @memberof Player
     */
    email: string;

    /** A list of postiions held by this player.
     * @type {string[]}
     * @memberof Player
     */
    position: string[];

    /** Notes from the ST regarding this player.
     * @type {string}
     * @memberof Player
     */
    stNotes: string;
}
