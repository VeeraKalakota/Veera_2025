---
layout: base
title: Sprint 4 Final Review
description: Changes made to the Mario Game
author: Veera
hide: true
---

# Sprint 4 Final Review

**Prepared by: Veera Kalakota** 
**Date: 12/19/2024** 




## Overview
*In this sprint, we added a key-collection mechanic to enhance the player's experience. This feature ensures that certain interactions unlock level progression only when specific conditions are met.*

### The following files were modified:

1. **GameEnv.js**
2. **PlayerHills.js**
3. **PlatformJump.js**

---

## Code Changes

### 1. `GameEnv.js`
We introduced a new boolean property `keyCollected` to track whether the key has been collected.

#### New Code:
```javascript
/**
 * @static
 * @property {boolean} keyCollected - Checks whether the key has been collected by Mario or not
 */
static keyCollected = false;
```

#### Purpose:
- `keyCollected` serves as a global flag, updated when Mario interacts with the item block (key).
- It is referenced by the player logic to restrict progression until the key is collected.

---

### 2. `PlatformJump.js`
We updated the `handleItemBlockCollision` method to set `GameEnv.keyCollected` to `true` when Mario interacts with the item block.

#### Updated Code:
```javascript
handleItemBlockCollision() {
    // Make the item block disappear by hiding it
    this.isVisible = false;
    // Update status of key
    GameEnv.keyCollected = true;
    // Remove the block from the display
    this.canvas.style.display = 'none';
}
```

#### Purpose:
- This method ensures the item block disappears upon collision.
- Sets the `keyCollected` flag to `true`, allowing the player to progress.

---

### 3. `PlayerHills.js`
We added a restriction in the collision logic for the finish line. The player can only trigger the level progression if `keyCollected` is `true`.

#### Updated Code:
```javascript
case "finishline":
    if (this.collisionData.touchPoints.this.right && GameEnv.keyCollected) {
        this.state.movement.right = true;
        this.state.movement.left = false;
        this.x = GameEnv.innerWidth + 1;
    } else if (this.collisionData.touchPoints.this.left && GameEnv.keyCollected) {
        this.state.movement.left = false;
        this.state.movement.right = true;
        this.x = GameEnv.innerWidth + 1;
    }
    break;
```

#### Purpose:
- Restricts player progression until the key is collected.
- Prevents unintended early completion of the level.

---

## Summary of Changes
| File              | Change Description                                                    |
|-------------------|-----------------------------------------------------------------------|
| **GameEnv.js**    | Added `keyCollected` boolean to track key collection.                 |
| **PlatformJump.js** | Updated collision method to set `keyCollected` to `true`.            |
| **PlayerHills.js**  | Added logic to restrict finish line interactions based on key status. |

---

## Testing

### Test Cases
#### 1. Collision with Item Block
   - Verify that the item block disappears.
   - Ensure `GameEnv.keyCollected` is set to `true`.

#### 2. Player Progression Restriction
   - Without collecting the key:
     - The player cannot trigger the finish line.
   - After collecting the key:
     - The player can trigger the finish line to complete the level.

#### 3. Edge Cases
   - Confirm the item block cannot be reactivated after disappearing.
   - Ensure the player cannot bypass the key requirement under any conditions.

---

## Conclusion
These changes introduce a simple yet effective key-collection mechanic that adds a layer of challenge and interactivity to the game. The implementation aligns with the existing game architecture and ensures robust functionality.

---

## Next Steps
- Enhance the item block visuals (e.g., animations).
- Add audio cues for key collection.
- Implement additional mechanics that utilize `keyCollected`.
