/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview English strings.
 * @author ascii@media.mit.edu (Andrew Sliwinski) PenguinMod for PM Scripts
 *
 * PENGUINMOD SCRIPT INSTRUCTIONS
 * All message strings must use single quotes for the build scripts to work properly.
 * Don't use JS only methods to define these messages.
 * Make sure to import the translations from the google sheet before running any scripts!
 * 
 * READ COMMENT BELOW THIS ONE TO GET COPY & PASTE COMMANDS FOR THESE!
 * How to import translations:
 *      1. Download the Google Sheet as an xlsx file under msg/input/sheet.xlsx
 *      2. Run the i18n/sync_xlsx script with the xlsx sheet as the input
 *      3. Match any changes to the English sheet into this file (en.js and en.json have the values imported from the sheet)
 * After modifying this file:
 *      1. Run the i18n/create_en_msgs script and replace msg/js/en.js and msg/json/en.json with the output
 *      2. Run the i18n/messages_fillout script for sheet creation (make sure you imported the translations from the google sheet first)
 *      2.5:
 *          If you modified the text of a translation key,
 *          run i18n/messages_override with the generated filled_scratch_msgs.js from step 2 as an argument to the script
 *          and then specify the changed keys as arguments after.
 *          This will pull from the **imported** en translations, so make sure you edited the English translations from the Google Sheet and *then* imported the sheet.
 *      3. Generate an XLSX file with i18n/create_base_xlsx for translation
 *      4. Please update the Google Sheets (click Replace spreadsheet when importing) if you have access (otherwise, someone with access needs to update it later)
*/
/*

BEFORE ANYTHING:
cd i18n

How to import translations:
node sync_xlsx ../msg/input/sheet.xlsx

After modifying this file (DOES NOT INCLUDE STEP 2.5):
node create_en_msgs
cp ../msg/output/en.js ../msg/js/en.js
cp ../msg/output/en.json ../msg/json/en.json
node messages_fillout
node create_base_xlsx ../msg/output/filled_scratch_msgs.js

After modifying this file (INCLUDES STEP 2.5 BUT YOU NEED TO CHANGE COMMAND 5):
node create_en_msgs
cp ../msg/output/en.js ../msg/js/en.js
cp ../msg/output/en.json ../msg/json/en.json
node messages_fillout
node messages_override (PATH TO msg/output/filled_scratch_msgs.js) (List the keys you changed in the Google sheet, split by spaces)
node create_base_xlsx ../msg/output/override_scratch_msgs.js

*/

// SCRATCH SCRIPT INSTRUCTIONS (NOT REQUIRED IN PM)
// After modifying this file, run `npm run translate` from the root directory
// to regenerate `./msg/json/en.json`.
// IMPORTANT:
// All message strings must use single quotes for the scripts to work properly

'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');

// Control blocks
Blockly.Msg.CONTROL_FOREVER = 'forever';
Blockly.Msg.CONTROL_REPEAT = 'repeat %1';
Blockly.Msg.CONTROL_IF = 'if %1 then';
Blockly.Msg.CONTROL_ELSE = 'else';
Blockly.Msg.CONTROL_STOP = 'stop';
Blockly.Msg.CONTROL_STOP_ALL = 'all';
Blockly.Msg.CONTROL_STOP_THIS = 'this script';
Blockly.Msg.CONTROL_STOP_OTHER = 'other scripts in sprite';
Blockly.Msg.CONTROL_WAIT = 'wait %1 seconds';
Blockly.Msg.CONTROL_WAITUNTIL = 'wait until %1';
Blockly.Msg.CONTROL_REPEATUNTIL = 'repeat until %1';
Blockly.Msg.CONTROL_WHILE = 'while %1';
Blockly.Msg.CONTROL_FOREACH = 'for each %1 in %2';
Blockly.Msg.CONTROL_STARTASCLONE = 'when I start as a clone';
Blockly.Msg.CONTROL_CREATECLONEOF = 'create clone of %1';
Blockly.Msg.CONTROL_CREATECLONEOF_MYSELF = 'myself';
Blockly.Msg.CONTROL_DELETETHISCLONE = 'delete this clone';
Blockly.Msg.CONTROL_COUNTER = 'counter';
Blockly.Msg.CONTROL_INCRCOUNTER = 'increment counter';
Blockly.Msg.CONTROL_CLEARCOUNTER = 'clear counter';
Blockly.Msg.CONTROL_ALLATONCE = 'all at once';

// Data blocks
Blockly.Msg.DATA_SETVARIABLETO = 'set %1 to %2';
Blockly.Msg.DATA_CHANGEVARIABLEBY = 'change %1 by %2';
Blockly.Msg.DATA_SHOWVARIABLE = 'show variable %1';
Blockly.Msg.DATA_HIDEVARIABLE = 'hide variable %1';
Blockly.Msg.DATA_ADDTOLIST = 'add %1 to %2';
Blockly.Msg.DATA_DELETEOFLIST = 'delete %1 of %2';
Blockly.Msg.DATA_DELETEALLOFLIST = 'delete all of %1';
Blockly.Msg.DATA_INSERTATLIST = 'insert %1 at %2 of %3';
Blockly.Msg.DATA_REPLACEITEMOFLIST = 'replace item %1 of %2 with %3';
Blockly.Msg.DATA_ITEMOFLIST = 'item %1 of %2';
Blockly.Msg.DATA_ITEMNUMOFLIST = 'item # of %1 in %2';
Blockly.Msg.DATA_LENGTHOFLIST = 'length of %1';
Blockly.Msg.DATA_LISTCONTAINSITEM = '%1 contains %2?';
Blockly.Msg.DATA_SHOWLIST = 'show list %1';
Blockly.Msg.DATA_HIDELIST = 'hide list %1';
Blockly.Msg.DATA_INDEX_ALL = 'all';
Blockly.Msg.DATA_INDEX_LAST = 'last';
Blockly.Msg.DATA_INDEX_RANDOM = 'random';

// Event blocks
Blockly.Msg.EVENT_WHENFLAGCLICKED = 'when %1 clicked';
Blockly.Msg.EVENT_WHENANYTHING = 'when %1';
Blockly.Msg.EVENT_WHENTHISSPRITECLICKED = 'when this sprite clicked';
Blockly.Msg.EVENT_WHENSTAGECLICKED = 'when stage clicked';
Blockly.Msg.EVENT_WHENTOUCHINGOBJECT = 'when this sprite touches %1';
Blockly.Msg.EVENT_WHENBROADCASTRECEIVED = 'when I receive %1';
Blockly.Msg.EVENT_WHENBACKDROPSWITCHESTO = 'when backdrop switches to %1';
Blockly.Msg.EVENT_WHENGREATERTHAN = 'when %1 > %2';
Blockly.Msg.EVENT_WHENGREATERTHAN_TIMER = 'timer';
Blockly.Msg.EVENT_WHENGREATERTHAN_LOUDNESS = 'loudness';
Blockly.Msg.EVENT_BROADCAST = 'broadcast %1';
Blockly.Msg.EVENT_BROADCASTANDWAIT = 'broadcast %1 and wait';
Blockly.Msg.EVENT_WHENKEYPRESSED = 'when %1 key pressed';
Blockly.Msg.EVENT_WHENKEYPRESSED_SPACE = 'space';
Blockly.Msg.EVENT_WHENKEYPRESSED_LEFT = 'left arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_RIGHT = 'right arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_DOWN = 'down arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_UP = 'up arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_ANY = 'any';

// Looks blocks
Blockly.Msg.LOOKS_SAYFORSECS = 'say %1 for %2 seconds';
Blockly.Msg.LOOKS_SAY = 'say %1';
Blockly.Msg.LOOKS_HELLO = 'Hello!';
Blockly.Msg.LOOKS_THINKFORSECS = 'think %1 for %2 seconds';
Blockly.Msg.LOOKS_THINK = 'think %1';
Blockly.Msg.LOOKS_HMM = 'Hmm...';
Blockly.Msg.LOOKS_SHOW = 'show';
Blockly.Msg.LOOKS_HIDE = 'hide';
Blockly.Msg.LOOKS_HIDEALLSPRITES = 'hide all sprites';
Blockly.Msg.LOOKS_EFFECT_COLOR = 'color';
Blockly.Msg.LOOKS_EFFECT_FISHEYE = 'fisheye';
Blockly.Msg.LOOKS_EFFECT_WHIRL = 'whirl';
Blockly.Msg.LOOKS_EFFECT_PIXELATE = 'pixelate';
Blockly.Msg.LOOKS_EFFECT_MOSAIC = 'mosaic';
Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS = 'brightness';
Blockly.Msg.LOOKS_EFFECT_GHOST = 'ghost';
Blockly.Msg.LOOKS_CHANGEEFFECTBY = 'change %1 effect by %2';
Blockly.Msg.LOOKS_SETEFFECTTO = 'set %1 effect to %2';
Blockly.Msg.LOOKS_CLEARGRAPHICEFFECTS = 'clear graphic effects';
Blockly.Msg.LOOKS_CHANGESIZEBY = 'change size by %1';
Blockly.Msg.LOOKS_SETSIZETO = 'set size to %1 %';
Blockly.Msg.LOOKS_SIZE = 'size';
Blockly.Msg.LOOKS_CHANGESTRETCHBY = 'change stretch by %1';
Blockly.Msg.LOOKS_SETSTRETCHTO = 'set stretch to %1 %';
Blockly.Msg.LOOKS_SWITCHCOSTUMETO = 'switch costume to %1';
Blockly.Msg.LOOKS_NEXTCOSTUME = 'next costume';
Blockly.Msg.LOOKS_PREVIOUSCOSTUME = 'previous costume';
Blockly.Msg.LOOKS_RANDOMCOSTUME = 'random costume';
Blockly.Msg.LOOKS_SWITCHBACKDROPTO = 'switch backdrop to %1';
Blockly.Msg.LOOKS_GOTOFRONTBACK = 'go to %1 layer';
Blockly.Msg.LOOKS_GOTOFRONTBACK_FRONT = 'front';
Blockly.Msg.LOOKS_GOTOFRONTBACK_BACK = 'back';
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS = 'go %1 %2 layers';
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD = 'forward';
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD = 'backward';
Blockly.Msg.LOOKS_BACKDROPNUMBERNAME = 'backdrop %1';
Blockly.Msg.LOOKS_COSTUMENUMBERNAME = 'costume %1';
Blockly.Msg.LOOKS_NUMBERNAME_NUMBER = 'number';
Blockly.Msg.LOOKS_NUMBERNAME_NAME = 'name';
Blockly.Msg.LOOKS_SWITCHBACKDROPTOANDWAIT = 'switch backdrop to %1 and wait';
Blockly.Msg.LOOKS_NEXTBACKDROP_BLOCK = 'next backdrop';
Blockly.Msg.LOOKS_NEXTBACKDROP = 'next backdrop';
Blockly.Msg.LOOKS_PREVIOUSBACKDROP = 'previous backdrop';
Blockly.Msg.LOOKS_RANDOMBACKDROP = 'random backdrop';

// Motion blocks
Blockly.Msg.MOTION_MOVESTEPS = 'move %1 steps';
Blockly.Msg.MOTION_TURNLEFT = 'turn %1 %2 degrees';
Blockly.Msg.MOTION_TURNRIGHT = 'turn %1 %2 degrees';
Blockly.Msg.MOTION_POINTINDIRECTION = 'point in direction %1';
Blockly.Msg.MOTION_POINTTOWARDS = 'point towards %1';
Blockly.Msg.MOTION_POINTTOWARDS_POINTER = 'mouse-pointer';
Blockly.Msg.MOTION_POINTTOWARDS_RANDOM = 'random direction';
Blockly.Msg.MOTION_GOTO = 'go to %1';
Blockly.Msg.MOTION_GOTO_POINTER = 'mouse-pointer';
Blockly.Msg.MOTION_GOTO_RANDOM = 'random position';
Blockly.Msg.MOTION_GOTOXY = 'go to x: %1 y: %2';
Blockly.Msg.MOTION_GLIDESECSTOXY = 'glide %1 secs to x: %2 y: %3';
Blockly.Msg.MOTION_GLIDETO = 'glide %1 secs to %2';
Blockly.Msg.MOTION_GLIDETO_POINTER = 'mouse-pointer';
Blockly.Msg.MOTION_GLIDETO_RANDOM = 'random position';
Blockly.Msg.MOTION_CHANGEXBY = 'change x by %1';
Blockly.Msg.MOTION_SETX = 'set x to %1';
Blockly.Msg.MOTION_CHANGEYBY = 'change y by %1';
Blockly.Msg.MOTION_SETY = 'set y to %1';
Blockly.Msg.MOTION_IFONEDGEBOUNCE = 'if on edge, bounce';
Blockly.Msg.MOTION_SETROTATIONSTYLE = 'set rotation style %1';
Blockly.Msg.MOTION_SETROTATIONSTYLE_LEFTRIGHT = 'left-right';
Blockly.Msg.MOTION_SETROTATIONSTYLE_DONTROTATE = 'don\'t rotate';
Blockly.Msg.MOTION_SETROTATIONSTYLE_ALLAROUND = 'all around';
Blockly.Msg.MOTION_XPOSITION = 'x position';
Blockly.Msg.MOTION_YPOSITION = 'y position';
Blockly.Msg.MOTION_DIRECTION = 'direction';
Blockly.Msg.MOTION_SCROLLRIGHT = 'scroll right %1';
Blockly.Msg.MOTION_SCROLLUP = 'scroll up %1';
Blockly.Msg.MOTION_ALIGNSCENE = 'align scene %1';
Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMLEFT = 'bottom-left';
Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMRIGHT = 'bottom-right';
Blockly.Msg.MOTION_ALIGNSCENE_MIDDLE = 'middle';
Blockly.Msg.MOTION_ALIGNSCENE_TOPLEFT = 'top-left';
Blockly.Msg.MOTION_ALIGNSCENE_TOPRIGHT = 'top-right';
Blockly.Msg.MOTION_XSCROLL = 'x scroll';
Blockly.Msg.MOTION_YSCROLL = 'y scroll';
Blockly.Msg.MOTION_STAGE_SELECTED = 'Stage selected: no motion blocks';

// Operators blocks
Blockly.Msg.OPERATORS_ADD = '%1 + %2';
Blockly.Msg.OPERATORS_SUBTRACT = '%1 - %2';
Blockly.Msg.OPERATORS_MULTIPLY = '%1 * %2';
Blockly.Msg.OPERATORS_DIVIDE = '%1 / %2';
Blockly.Msg.OPERATORS_RANDOM = 'pick random %1 to %2';
Blockly.Msg.OPERATORS_GT = '%1 > %2';
Blockly.Msg.OPERATORS_LT = '%1 < %2';
Blockly.Msg.OPERATORS_EQUALS = '%1 = %2';
Blockly.Msg.OPERATORS_AND = '%1 and %2';
Blockly.Msg.OPERATORS_OR = '%1 or %2';
Blockly.Msg.OPERATORS_NOT = 'not %1';
Blockly.Msg.OPERATORS_JOIN = 'join %1 %2';
Blockly.Msg.OPERATORS_JOIN3 = 'join %1 %2 %3';
Blockly.Msg.OPERATORS_JOIN_APPLE = 'apple';
Blockly.Msg.OPERATORS_JOIN_BANANA = 'banana';
Blockly.Msg.OPERATORS_LETTERSFROMTOIN = 'letters from %1 to %2 in %3';
Blockly.Msg.OPERATORS_LETTEROF = 'letter %1 of %2';
Blockly.Msg.OPERATORS_LETTEROF_APPLE = 'a';
Blockly.Msg.OPERATORS_LENGTH = 'length of %1';
Blockly.Msg.OPERATORS_CONTAINS = '%1 contains %2?';
Blockly.Msg.OPERATORS_MOD = '%1 mod %2';
Blockly.Msg.OPERATORS_ROUND = 'round %1';
Blockly.Msg.OPERATORS_MATHOP = '%1 of %2';
Blockly.Msg.OPERATORS_MATHOP_ABS = 'abs';
Blockly.Msg.OPERATORS_MATHOP_FLOOR = 'floor';
Blockly.Msg.OPERATORS_MATHOP_CEILING = 'ceiling';
Blockly.Msg.OPERATORS_MATHOP_SQRT = 'sqrt';
Blockly.Msg.OPERATORS_MATHOP_SIN = 'sin';
Blockly.Msg.OPERATORS_MATHOP_COS = 'cos';
Blockly.Msg.OPERATORS_MATHOP_TAN = 'tan';
Blockly.Msg.OPERATORS_MATHOP_ASIN = 'asin';
Blockly.Msg.OPERATORS_MATHOP_ACOS = 'acos';
Blockly.Msg.OPERATORS_MATHOP_ATAN = 'atan';
Blockly.Msg.OPERATORS_MATHOP_LN = 'ln';
Blockly.Msg.OPERATORS_MATHOP_LOG = 'log';
Blockly.Msg.OPERATORS_MATHOP_EEXP = 'e ^';
Blockly.Msg.OPERATORS_MATHOP_10EXP = '10 ^';
Blockly.Msg.OPERATORS_ADVLOG = 'log %1 %2';

// Procedures blocks
Blockly.Msg.PROCEDURES_DEFINITION = 'define %1';

// Sensing blocks
Blockly.Msg.SENSING_TOUCHINGOBJECT = 'touching %1?';
Blockly.Msg.SENSING_TOUCHINGOBJECT_POINTER = 'mouse-pointer';
Blockly.Msg.SENSING_TOUCHINGOBJECT_EDGE = 'edge';
Blockly.Msg.SENSING_TOUCHINGCOLOR = 'touching color %1?';
Blockly.Msg.SENSING_COLORISTOUCHINGCOLOR = 'color %1 is touching %2?';
Blockly.Msg.SENSING_DISTANCETO = 'distance to %1';
Blockly.Msg.SENSING_DISTANCETO_POINTER = 'mouse-pointer';
Blockly.Msg.SENSING_ASKANDWAIT = 'ask %1 and wait';
Blockly.Msg.SENSING_ASK_TEXT = 'What\'s your name?';
Blockly.Msg.SENSING_ANSWER = 'answer';
Blockly.Msg.SENSING_KEYPRESSED = 'key %1 pressed?';
Blockly.Msg.SENSING_MOUSEDOWN = 'mouse down?';
Blockly.Msg.SENSING_MOUSEX = 'mouse x';
Blockly.Msg.SENSING_MOUSEY = 'mouse y';
Blockly.Msg.SENSING_SETDRAGMODE = 'set drag mode %1';
Blockly.Msg.SENSING_SETDRAGMODE_DRAGGABLE = 'draggable';
Blockly.Msg.SENSING_SETDRAGMODE_NOTDRAGGABLE = 'not draggable';
Blockly.Msg.SENSING_CLIPBOARDITEM = 'clipboard item';
Blockly.Msg.SENSING_ADDTOCLIPBOARD = 'add %1 to clipboard';
Blockly.Msg.SENSING_LOUDNESS = 'loudness';
Blockly.Msg.SENSING_LOUD = 'loud?';
Blockly.Msg.SENSING_TIMER = 'timer';
Blockly.Msg.SENSING_RESETTIMER = 'reset timer';
Blockly.Msg.SENSING_OF = '%1 of %2';
Blockly.Msg.SENSING_OF_XPOSITION = 'x position';
Blockly.Msg.SENSING_OF_YPOSITION = 'y position';
Blockly.Msg.SENSING_OF_DIRECTION = 'direction';
Blockly.Msg.SENSING_OF_COSTUMENUMBER = 'costume #';
Blockly.Msg.SENSING_OF_COSTUMENAME = 'costume name';
Blockly.Msg.SENSING_OF_SIZE = 'size';
Blockly.Msg.SENSING_OF_VOLUME = 'volume';
Blockly.Msg.SENSING_OF_BACKDROPNUMBER = 'backdrop #';
Blockly.Msg.SENSING_OF_BACKDROPNAME = 'backdrop name';
Blockly.Msg.SENSING_OF_STAGE = 'Stage';
Blockly.Msg.SENSING_CURRENT = 'current %1';
Blockly.Msg.SENSING_CURRENT_YEAR = 'year';
Blockly.Msg.SENSING_CURRENT_MONTH = 'month';
Blockly.Msg.SENSING_CURRENT_DATE = 'date';
Blockly.Msg.SENSING_CURRENT_DAYOFWEEK = 'day of week';
Blockly.Msg.SENSING_CURRENT_HOUR = 'hour';
Blockly.Msg.SENSING_CURRENT_MINUTE = 'minute';
Blockly.Msg.SENSING_CURRENT_SECOND = 'second';
Blockly.Msg.SENSING_DAYSSINCE2000 = 'days since 2000';
Blockly.Msg.SENSING_USERNAME = 'username';
Blockly.Msg.SENSING_USERID = 'user id';

// Sound blocks
Blockly.Msg.SOUND_PLAY = 'start sound %1';
Blockly.Msg.SOUND_PLAYUNTILDONE = 'play sound %1 until done';
Blockly.Msg.SOUND_STOPALLSOUNDS = 'stop all sounds';
Blockly.Msg.SOUND_SETEFFECTO = 'set %1 effect to %2';
Blockly.Msg.SOUND_CHANGEEFFECTBY = 'change %1 effect by %2';
Blockly.Msg.SOUND_CLEAREFFECTS = 'clear sound effects';
Blockly.Msg.SOUND_EFFECTS_PITCH = 'pitch';
Blockly.Msg.SOUND_EFFECTS_PAN = 'pan left/right';
Blockly.Msg.SOUND_CHANGEVOLUMEBY = 'change volume by %1';
Blockly.Msg.SOUND_SETVOLUMETO = 'set volume to %1%';
Blockly.Msg.SOUND_VOLUME = 'volume';
Blockly.Msg.SOUND_RECORD = 'record...';

// Data category labels
Blockly.Msg.DATA_VARIABLE_LIST_ALLSPRITES = 'Variables for all sprites';
Blockly.Msg.DATA_VARIABLE_LIST_THISSPRITE = 'Variables for this sprite';
Blockly.Msg.DATA_LIST_LIST_ALLSPRITES = 'Lists for all sprites';
Blockly.Msg.DATA_LIST_LIST_THISSPRITE = 'Lists for this sprite';

// Category labels
Blockly.Msg.CATEGORY_MOTION = 'Motion';
Blockly.Msg.CATEGORY_LOOKS = 'Looks';
Blockly.Msg.CATEGORY_SOUND = 'Sound';
Blockly.Msg.CATEGORY_EVENTS = 'Events';
Blockly.Msg.CATEGORY_CONTROL = 'Control';
Blockly.Msg.CATEGORY_SENSING = 'Sensing';
Blockly.Msg.CATEGORY_OPERATORS = 'Operators';
Blockly.Msg.CATEGORY_VARIABLES = 'Variables';
Blockly.Msg.CATEGORY_LISTS = 'Lists';
Blockly.Msg.CATEGORY_MYBLOCKS = 'My Blocks';

// Context menus
Blockly.Msg.DUPLICATE = 'Duplicate';
Blockly.Msg.DELETE = 'Delete';
Blockly.Msg.ADD_COMMENT = 'Add Comment';
Blockly.Msg.REMOVE_COMMENT = 'Remove Comment';
Blockly.Msg.DELETE_BLOCK = 'Delete Block';
Blockly.Msg.DELETE_X_BLOCKS = 'Delete %1 Blocks';
Blockly.Msg.DELETE_ALL_BLOCKS = 'Delete all %1 blocks?';
Blockly.Msg.CLEAN_UP = 'Clean up Blocks';
Blockly.Msg.HELP = 'Help';
Blockly.Msg.UNDO = 'Undo';
Blockly.Msg.REDO = 'Redo';
Blockly.Msg.EDIT_PROCEDURE = 'Edit';
Blockly.Msg.SHOW_PROCEDURE_DEFINITION = 'Go to definition';
Blockly.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT = 'Say something...';

// Color
Blockly.Msg.COLOUR_HUE_LABEL = 'Color';
Blockly.Msg.COLOUR_SATURATION_LABEL = 'Saturation';
Blockly.Msg.COLOUR_BRIGHTNESS_LABEL = 'Brightness';

// Variables
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.CHANGE_VALUE_TITLE = 'Change value:';
Blockly.Msg.RENAME_VARIABLE = 'Rename variable';
Blockly.Msg.RENAME_VARIABLE_TITLE = 'Rename all "%1" variables to:';
Blockly.Msg.RENAME_VARIABLE_MODAL_TITLE = 'Rename Variable';
Blockly.Msg.NEW_VARIABLE = 'Make a Variable';
Blockly.Msg.NEW_VARIABLE_TITLE = 'New variable name:';
Blockly.Msg.VARIABLE_MODAL_TITLE = 'New Variable';
Blockly.Msg.VARIABLE_ALREADY_EXISTS = 'A variable named "%1" already exists.';
Blockly.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = 'A variable named "%1" already exists for another variable of type "%2".';
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = 'Delete %1 uses of the "%2" variable?';
Blockly.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE = 'Can\'t delete the variable "%1" because it\'s part of the definition of the function "%2"';
Blockly.Msg.DELETE_VARIABLE = 'Delete the "%1" variable';

// Custom Procedures
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_PROCEDURE = 'Make a Block';
Blockly.Msg.PROCEDURE_ALREADY_EXISTS = 'A procedure named "%1" already exists.';
Blockly.Msg.PROCEDURE_DEFAULT_NAME = 'block name';
Blockly.Msg.PROCEDURE_USED = 'To delete a block definition, first remove all uses of the block';

// Lists
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_LIST = 'Make a List';
Blockly.Msg.NEW_LIST_TITLE = 'New list name:';
Blockly.Msg.LIST_MODAL_TITLE = 'New List';
Blockly.Msg.LIST_ALREADY_EXISTS = 'A list named "%1" already exists.';
Blockly.Msg.RENAME_LIST_TITLE = 'Rename all "%1" lists to:';
Blockly.Msg.RENAME_LIST_MODAL_TITLE = 'Rename List';
Blockly.Msg.DEFAULT_LIST_ITEM = 'thing';
Blockly.Msg.DELETE_LIST = 'Delete the "%1" list';
Blockly.Msg.RENAME_LIST = 'Rename list';

// Broadcast Messages
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_BROADCAST_MESSAGE = 'New message';
Blockly.Msg.NEW_BROADCAST_MESSAGE_TITLE = 'New message name:';
Blockly.Msg.BROADCAST_MODAL_TITLE = 'New Message';
Blockly.Msg.DEFAULT_BROADCAST_MESSAGE_NAME = 'message1';

// Extension/Extra Stuff
Blockly.Msg.OPEN_DOCUMENTATION = 'Open Documentation';
Blockly.Msg.HELP_MANUAL = 'Help Manual';
Blockly.Msg.YOUR_MOM = 'your mom';

// PenguinMod custom block messages (localization keys)
Blockly.Msg.PM_CUSTOM_BLOCK_ALWAYS = 'always';
Blockly.Msg.PM_CUSTOM_BLOCK_AMOUNT_OF_ARG1_IN_ARG2 = 'amount of %1 in %2';
Blockly.Msg.PM_CUSTOM_BLOCK_AMOUNT_OF_TIMES_ARG1_APPEARS_IN_ARG2 = 'amount of times %1 appears in %2';
Blockly.Msg.PM_CUSTOM_BLOCK_AS_ARG1_DO = 'as %1 do';
Blockly.Msg.PM_CUSTOM_BLOCK_BROWSER = 'browser';
Blockly.Msg.PM_CUSTOM_BLOCK_BUBBLE_HEIGHT = 'bubble height';
Blockly.Msg.PM_CUSTOM_BLOCK_BUBBLE_WIDTH = 'bubble width';
Blockly.Msg.PM_CUSTOM_BLOCK_CASE_ARG1 = 'case %1';
Blockly.Msg.PM_CUSTOM_BLOCK_CHANGE_BY_X_ARG1_Y_ARG2 = 'change by x: %1 y: %2';
Blockly.Msg.PM_CUSTOM_BLOCK_CHANGE_STRETCH_BY_X_ARG1_Y_ARG2 = 'change stretch by x: %1 y: %2';
Blockly.Msg.PM_CUSTOM_BLOCK_CHARACTER_ARG1_TO_ID = 'character %1 to id';
Blockly.Msg.PM_CUSTOM_BLOCK_CONSTRAIN_ARG1_MIN_ARG2_MAX_ARG3 = 'constrain %1 min %2 max %3';
Blockly.Msg.PM_CUSTOM_BLOCK_CONTINUE_LOOP_ARG1 = 'continue loop %1';
Blockly.Msg.PM_CUSTOM_BLOCK_CURRENT_TIME_POSITION_OF_ARG1 = 'current time position of %1';
Blockly.Msg.PM_CUSTOM_BLOCK_CURRENT_VOLUME_OF_ARG1 = 'current volume of %1';
Blockly.Msg.PM_CUSTOM_BLOCK_DECREMENT_COUNTER = 'decrement counter';
Blockly.Msg.PM_CUSTOM_BLOCK_DEFAULT = 'default';
Blockly.Msg.PM_CUSTOM_BLOCK_DELETE_CLONES_OF_ARG1 = 'delete clones of %1';
Blockly.Msg.PM_CUSTOM_BLOCK_DIRECTION_TO_ARG1_ARG2_FROM_ARG3_ARG4 = 'direction to %1 %2 from %3 %4';
Blockly.Msg.PM_CUSTOM_BLOCK_DISTANCE_FROM_ARG1_ARG2_TO_ARG3_ARG4 = 'distance from %1 %2 to %3 %4';
Blockly.Msg.PM_CUSTOM_BLOCK_DRAGGABLE = 'draggable?';
Blockly.Msg.PM_CUSTOM_BLOCK_ERROR = 'error';
Blockly.Msg.PM_CUSTOM_BLOCK_ESCAPE_LOOP_ARG1 = 'escape loop %1';
Blockly.Msg.PM_CUSTOM_BLOCK_EXIT_CASE_ARG1 = 'exit case %1';
Blockly.Msg.PM_CUSTOM_BLOCK_FALSE = 'false';
Blockly.Msg.PM_CUSTOM_BLOCK_FILTER_ARG1_BY_ARG2_ARG3_ARG4 = 'filter %1 by %2 %3 %4';
Blockly.Msg.PM_CUSTOM_BLOCK_FINGER_ARG1_DOWN = 'finger %1 down?';
Blockly.Msg.PM_CUSTOM_BLOCK_FINGER_ARG1_TAPPED = 'finger %1 tapped?';
Blockly.Msg.PM_CUSTOM_BLOCK_FINGER_ARG1_X = 'finger %1 x';
Blockly.Msg.PM_CUSTOM_BLOCK_FINGER_ARG1_Y = 'finger %1 y';
Blockly.Msg.PM_CUSTOM_BLOCK_FOR_ARG1_OF_ARG2_TO_ARG3_ARG4 = 'for %1 of %2 to %3 %4';
Blockly.Msg.PM_CUSTOM_BLOCK_FOR_EACH_INDEX_ARG2_IN_ARG1 = 'for each index: %2 in %1';
Blockly.Msg.PM_CUSTOM_BLOCK_FOR_EACH_VALUE_ARG2_IN_ARG1 = 'for each value: %2 in %1';
Blockly.Msg.PM_CUSTOM_BLOCK_GET_LIST_ARG1_AS_AN_ARRAY = 'get list %1 as an array';
Blockly.Msg.PM_CUSTOM_BLOCK_GET_SPRITE_WITH_ARG1_SET_TO_ARG2 = 'get sprite with %1 set to %2';
Blockly.Msg.PM_CUSTOM_BLOCK_GLIDE_ARG1_STEPS_ARG2_IN_ARG3_SECS = 'glide %1 steps %2 in %3 secs';
Blockly.Msg.PM_CUSTOM_BLOCK_GO_ARG1_ARG2 = 'go %1 %2';
Blockly.Msg.PM_CUSTOM_BLOCK_GO_TO_LAYER_ARG1 = 'go to layer %1';
Blockly.Msg.PM_CUSTOM_BLOCK_HIDDEN_ARG1_ARG2 = 'hidden %1 %2';
Blockly.Msg.PM_CUSTOM_BLOCK_HIDE_ARG1 = 'hide %1';
Blockly.Msg.PM_CUSTOM_BLOCK_ID_ARG1_TO_CHARACTER = 'id %1 to character';
Blockly.Msg.PM_CUSTOM_BLOCK_IF_ARG1_THEN_ARG2_ELSE_ARG3 = 'if %1 then %2 else %3';
Blockly.Msg.PM_CUSTOM_BLOCK_IF_A_BLOCK_ERRORS = 'if a block errors';
Blockly.Msg.PM_CUSTOM_BLOCK_IF_TOUCHING_ARG1_BOUNCE = 'if touching %1, bounce';
Blockly.Msg.PM_CUSTOM_BLOCK_IF_TOUCHING_X_ARG1_Y_ARG2_BOUNCE = 'if touching x: %1 y: %2, bounce';
Blockly.Msg.PM_CUSTOM_BLOCK_INDEX = 'index';
Blockly.Msg.PM_CUSTOM_BLOCK_INDEX_OF_ARG1_IN_ARG2 = 'index of %1 in %2';
Blockly.Msg.PM_CUSTOM_BLOCK_INLINE_BLOCK = 'inline block';
Blockly.Msg.PM_CUSTOM_BLOCK_INTERPOLATE_ARG1_TO_ARG2_BY_ARG3 = 'interpolate %1 to %2 by %3';
Blockly.Msg.PM_CUSTOM_BLOCK_IN_ARG1_REPLACE_ALL_ARG2_WITH_ARG3 = 'in %1 replace all %2 with %3';
Blockly.Msg.PM_CUSTOM_BLOCK_IN_ARG1_REPLACE_FIRST_ARG2_WITH_ARG3 = 'in %1 replace first %2 with %3';
Blockly.Msg.PM_CUSTOM_BLOCK_IS_ARG1_EMPTY = 'is %1 empty?';
Blockly.Msg.PM_CUSTOM_BLOCK_IS_ARG1_PLAYING = 'is %1 playing?';
Blockly.Msg.PM_CUSTOM_BLOCK_IS_ARG1_VISIBLE = 'is %1 visible?';
Blockly.Msg.PM_CUSTOM_BLOCK_IS_CHARACTER_ARG1_UPPERCASE = 'is character %1 uppercase?';
Blockly.Msg.PM_CUSTOM_BLOCK_IS_CLONE = 'is clone?';
Blockly.Msg.PM_CUSTOM_BLOCK_IS_MOUSE_SCROLLING_ARG1 = 'is mouse scrolling %1?';
Blockly.Msg.PM_CUSTOM_BLOCK_ITEM = 'item';
Blockly.Msg.PM_CUSTOM_BLOCK_ITEM_ARG1_EXISTS_IN_ARG2 = 'item %1 exists in %2 ?';
Blockly.Msg.PM_CUSTOM_BLOCK_JOIN_ARG1_ARG2 = 'join %1 %2';
Blockly.Msg.PM_CUSTOM_BLOCK_KEY_ARG1_HIT = 'key %1 hit?';
Blockly.Msg.PM_CUSTOM_BLOCK_LAST_INDEX_OF_ARG1_IN_ARG2 = 'last index of %1 in %2';
Blockly.Msg.PM_CUSTOM_BLOCK_LAYER = 'layer';
Blockly.Msg.PM_CUSTOM_BLOCK_LENGTH_OF_ARG1 = 'length of %1';
Blockly.Msg.PM_CUSTOM_BLOCK_LETTERS_FROM_ARG1_UP_TO_BEFORE_ARG2_IN_ARG3 = 'letters from %1 up to before %2 in %3';
Blockly.Msg.PM_CUSTOM_BLOCK_LOGGED_IN = 'logged in?';
Blockly.Msg.PM_CUSTOM_BLOCK_MATCH_ARG1_WITH_REGEX_ARG2_ARG3 = 'match %1 with regex %2 %3';
Blockly.Msg.PM_CUSTOM_BLOCK_MOBILE = 'mobile?';
Blockly.Msg.PM_CUSTOM_BLOCK_MOUSE_CLICKED = 'mouse clicked?';
Blockly.Msg.PM_CUSTOM_BLOCK_MOVE_ARG1_ARG2_STEPS = 'move %1 %2 steps';
Blockly.Msg.PM_CUSTOM_BLOCK_MOVE_BACK_ARG1_STEPS = 'move back %1 steps';
Blockly.Msg.PM_CUSTOM_BLOCK_MOVE_TO_STAGE_ARG1 = 'move to stage %1';
Blockly.Msg.PM_CUSTOM_BLOCK_NEW_LINE = 'new line';
Blockly.Msg.PM_CUSTOM_BLOCK_NEW_SCRIPT = 'new script';
Blockly.Msg.PM_CUSTOM_BLOCK_OPERATING_SYSTEM = 'operating system';
Blockly.Msg.PM_CUSTOM_BLOCK_PAUSE_ALL_SOUNDS = 'pause all sounds';
Blockly.Msg.PM_CUSTOM_BLOCK_PAUSE_SOUND_ARG1 = 'pause sound %1';
Blockly.Msg.PM_CUSTOM_BLOCK_PLAY_ALL_SOUNDS = 'play all sounds';
Blockly.Msg.PM_CUSTOM_BLOCK_PLAY_SOUND_ARG1_STARTING_AT_ARG2_SECONDS_UNTIL_DONE = 'play sound %1 starting at %2 seconds until done';
Blockly.Msg.PM_CUSTOM_BLOCK_POINT_IN_RANDOM_DIRECTION = 'point in random direction';
Blockly.Msg.PM_CUSTOM_BLOCK_POINT_TOWARDS_X_ARG1_Y_ARG2 = 'point towards x: %1 y: %2';
Blockly.Msg.PM_CUSTOM_BLOCK_PREVIOUS_BACKDROP = 'previous backdrop';
Blockly.Msg.PM_CUSTOM_BLOCK_PREVIOUS_COSTUME = 'previous costume';
Blockly.Msg.PM_CUSTOM_BLOCK_RANDOM = 'random';
Blockly.Msg.PM_CUSTOM_BLOCK_READ_LINE_ARG1_IN_ARG2 = 'read line %1 in %2';
Blockly.Msg.PM_CUSTOM_BLOCK_REPEAT_FOR_ARG1_SECONDS = 'repeat for %1 seconds';
Blockly.Msg.PM_CUSTOM_BLOCK_RETURN_ARG1 = 'return %1';
Blockly.Msg.PM_CUSTOM_BLOCK_REVERSE_ARG1 = 'reverse %1';
Blockly.Msg.PM_CUSTOM_BLOCK_RUN_ARG1 = 'run %1';
Blockly.Msg.PM_CUSTOM_BLOCK_RUN_NEXT_CASE_WHEN_ARG1 = 'run next case when %1';
Blockly.Msg.PM_CUSTOM_BLOCK_SET_ARG1_COLOR_TO_ARG2 = 'set %1 color to %2';
Blockly.Msg.PM_CUSTOM_BLOCK_SET_ARG1_OF_ARG2_TO_ARG3 = 'set %1 of %2 to %3';
Blockly.Msg.PM_CUSTOM_BLOCK_SET_ARG1_TO_ARG2 = 'set %1 to %2';
Blockly.Msg.PM_CUSTOM_BLOCK_SET_ARG2_TO_ARRAY_ARG1 = 'set %2 to array %1';
Blockly.Msg.PM_CUSTOM_BLOCK_SET_COUNTER_TO_ARG1 = 'set counter to %1';
Blockly.Msg.PM_CUSTOM_BLOCK_SET_FADE_OUT_TO_ARG1_SECONDS_ON_ARG2 = 'set fade out to %1 seconds on %2';
Blockly.Msg.PM_CUSTOM_BLOCK_SET_FONT_TO_ARG1_WITH_FONT_SIZE_ARG2 = 'set font to %1 with font size %2';
Blockly.Msg.PM_CUSTOM_BLOCK_SET_STRETCH_TO_X_ARG1_Y_ARG2 = 'set stretch to x: %1 y: %2';
Blockly.Msg.PM_CUSTOM_BLOCK_SET_TEXT_BUBBLE_ARG1_TO_ARG2 = 'set text bubble %1 to %2';
Blockly.Msg.PM_CUSTOM_BLOCK_SET_TINT_COLOR_TO_ARG1 = 'set tint color to %1';
Blockly.Msg.PM_CUSTOM_BLOCK_SHIFT_ARG1_BY_ARG2 = 'shift %1 by %2';
Blockly.Msg.PM_CUSTOM_BLOCK_SHOW_ARG1 = 'show %1';
Blockly.Msg.PM_CUSTOM_BLOCK_START_SOUND_ARG1_AT_ARG2_SECONDS = 'start sound %1 at %2 seconds';
Blockly.Msg.PM_CUSTOM_BLOCK_STOP_ARG1 = 'stop %1';
Blockly.Msg.PM_CUSTOM_BLOCK_STOP_SOUND_ARG1 = 'stop sound %1';
Blockly.Msg.PM_CUSTOM_BLOCK_STOP_SPEAKING = 'stop speaking';
Blockly.Msg.PM_CUSTOM_BLOCK_SWITCH_ARG1 = 'switch %1';
Blockly.Msg.PM_CUSTOM_BLOCK_TAB_CHARACTER = 'tab character';
Blockly.Msg.PM_CUSTOM_BLOCK_TEST_REGEX_ARG2_ARG3_WITH_TEXT_ARG1 = 'test regex %2 %3 with text %1';
Blockly.Msg.PM_CUSTOM_BLOCK_THROW_ERROR_ARG1 = 'throw error %1';
Blockly.Msg.PM_CUSTOM_BLOCK_TINT_COLOR = 'tint color';
Blockly.Msg.PM_CUSTOM_BLOCK_TRUE = 'true';
Blockly.Msg.PM_CUSTOM_BLOCK_TRY_TO_DO = 'try to do';
Blockly.Msg.PM_CUSTOM_BLOCK_TURN_ARG1_ARG2_DEGREES_AROUND_X_ARG3_Y_ARG4 = 'turn %1 %2 degrees around x: %3 y: %4';
Blockly.Msg.PM_CUSTOM_BLOCK_TURN_AROUND = 'turn around';
Blockly.Msg.PM_CUSTOM_BLOCK_URL = 'url';
Blockly.Msg.PM_CUSTOM_BLOCK_VISIBLE = 'visible?';
Blockly.Msg.PM_CUSTOM_BLOCK_WAIT_ARG1_SECONDS_OR_UNTIL_ARG2 = 'wait %1 seconds or until %2';
Blockly.Msg.PM_CUSTOM_BLOCK_WAIT_UNTIL_NEXT_TICK = 'wait until next tick';
Blockly.Msg.PM_CUSTOM_BLOCK_WHEN_ARG1 = 'when %1';
Blockly.Msg.PM_CUSTOM_BLOCK_WHEN_ARG1_CLICKED = 'when %1 clicked';
Blockly.Msg.PM_CUSTOM_BLOCK_WHEN_ARG1_KEY_HIT = 'when %1 key hit';
Blockly.Msg.PM_CUSTOM_BLOCK_WHEN_MOUSE_IS_SCROLLED_ARG1 = 'when mouse is scrolled %1';
Blockly.Msg.PM_CUSTOM_BLOCK_X_STRETCH = 'x stretch';
Blockly.Msg.PM_CUSTOM_BLOCK_Y_STRETCH = 'y stretch';
