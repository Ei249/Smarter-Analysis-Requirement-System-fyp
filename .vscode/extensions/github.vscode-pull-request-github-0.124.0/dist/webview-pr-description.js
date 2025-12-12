var ic=Object.defineProperty;var i=($l,mi)=>ic($l,"name",{value:mi,configurable:!0});(()=>{var $l={2410:(_,k,j)=>{"use strict";j.d(k,{A:i(()=>D,"A")});var K=j(1601),V=j.n(K),L=j(6314),C=j.n(L),h=C()(V());h.push([_.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

body a {
	text-decoration: var(--text-link-decoration);
}

h3 {
	display: unset;
	font-size: unset;
	margin-block-start: unset;
	margin-block-end: unset;
	margin-inline-start: unset;
	margin-inline-end: unset;
	font-weight: unset;
}

body a:hover {
	text-decoration: underline;
}

button,
input[type='submit'] {
	color: var(--vscode-button-foreground);
	font-family: var(--vscode-font-family);
	border-radius: 2px;
	border: 1px solid transparent;
	padding: 4px 12px;
	font-size: 13px;
	line-height: 18px;
	white-space: nowrap;
	user-select: none;
}

button:not(.icon-button):not(.danger):not(.secondary),
input[type='submit'] {
	background-color: var(--vscode-button-background);
}

input.select-left {
	border-radius: 2px 0 0 2px;
}

button.select-right {
	border-radius: 0 2px 2px 0;
	width: 24px;
	position: relative;
}

button.select-right span {
	position: absolute;
	top: 2px;
	right: 4px;
}

button:focus,
input[type='submit']:focus {
	outline-color: var(--vscode-focusBorder);
	outline-style: solid;
	outline-width: 1px;
	outline-offset: 2px;
}

button:hover:enabled,
button:focus:enabled,
input[type='submit']:focus:enabled,
input[type='submit']:hover:enabled {
	background-color: var(--vscode-button-hoverBackground);
	cursor: pointer;
}

button.secondary {
	background-color: var(--vscode-button-secondaryBackground);
	color: var(--vscode-button-secondaryForeground);
}

button.secondary:hover:enabled,
button.secondary:focus:enabled,
input[type='submit'].secondary:focus:enabled,
input[type='submit'].secondary:hover:enabled {
	background-color: var(--vscode-button-secondaryHoverBackground);
}

textarea,
input[type='text'] {
	display: block;
	box-sizing: border-box;
	padding: 8px;
	width: 100%;
	resize: vertical;
	font-size: 13px;
	border: 1px solid var(--vscode-dropdown-border);
	background-color: var(--vscode-input-background);
	color: var(--vscode-input-foreground);
	font-family: var(--vscode-font-family);
	border-radius: 2px;
}

textarea::placeholder,
input[type='text']::placeholder {
	color: var(--vscode-input-placeholderForeground);
}

select {
	display: block;
	box-sizing: border-box;
	padding: 4px 8px;
	border-radius: 2px;
	font-size: 13px;
	border: 1px solid var(--vscode-dropdown-border);
	background-color: var(--vscode-dropdown-background);
	color: var(--vscode-dropdown-foreground);
}

textarea:focus,
input[type='text']:focus,
input[type='checkbox']:focus,
select:focus {
	outline: 1px solid var(--vscode-focusBorder);
}

input[type='checkbox'] {
	outline-offset: 1px;
}

.vscode-high-contrast input[type='checkbox'] {
	outline: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast input[type='checkbox']:focus {
	outline: 1px solid var(--vscode-contrastActiveBorder);
}

:not(.copilot-icon) > svg path,
.copilot-icon svg path:first-of-type {
	fill: var(--vscode-foreground);
}

body button:disabled,
input[type='submit']:disabled {
	opacity: 0.4;
}

body .hidden {
	display: none !important;
}

body img.avatar,
body span.avatar-icon svg {
	width: 20px;
	height: 20px;
	border-radius: 50%;
}

body img.avatar {
	vertical-align: middle;
}

.avatar-link {
	flex-shrink: 0;
}

.icon-button {
	display: flex;
	padding: 2px;
	background: transparent;
	border-radius: 4px;
	line-height: 0;
}

.icon-button:hover,
.title .icon-button:hover,
.title .icon-button:focus,
.section .icon-button:hover,
.section .icon-button:focus {
	background-color: var(--vscode-toolbar-hoverBackground);
}

.icon-button:focus,
.title .icon-button:focus,
.section .icon-button:focus {
	outline: 1px solid var(--vscode-focusBorder);
	outline-offset: 1px;
}

.label .icon-button:hover,
.label .icon-button:focus {
	background-color: transparent;
}

.section-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.section-item .avatar-link {
	margin-right: 8px;
}

.section-item .avatar-container {
	flex-shrink: 0;
}

.section-item .login {
	width: 129px;
	flex-shrink: 0;
}

.section-item img.avatar {
	width: 20px;
	height: 20px;
}

.section-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3px;
}

.section-icon.changes svg path {
	fill: var(--vscode-list-errorForeground);
}

.section-icon.commented svg path,
.section-icon.requested svg path {
	fill: var(--vscode-list-warningForeground);
}

.section-icon.approved svg path {
	fill: var(--vscode-issues-open);
}

.reviewer-icons {
	display: flex;
	gap: 4px;
}

.reviewer-icons [role='alert'] {
	position: absolute;
	width: 0;
	height: 0;
	overflow: hidden;
}

.push-right {
	margin-left: auto;
}

.avatar-with-author {
	display: flex;
	align-items: center;
}

.author-link {
	font-weight: 600;
	color: var(--vscode-editor-foreground);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.status-item button {
	margin-left: auto;
	margin-right: 0;
}

.automerge-section {
	display: flex;
}

.automerge-section,
.status-section {
	flex-wrap: wrap;
}

#status-checks .automerge-section {
	align-items: center;
	padding: 16px;
	background: var(--vscode-editorHoverWidget-background);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

.automerge-section .merge-select-container {
	margin-left: 8px;
}

.automerge-checkbox-wrapper,
.automerge-checkbox-label {
	display: flex;
	align-items: center;
	margin-right: 4px;
}

.automerge-checkbox-label {
	min-width: 80px;
}

.merge-queue-title .merge-queue-pending {
	color: var(--vscode-list-warningForeground);
}

.merge-queue-title .merge-queue-blocked {
	color: var(--vscode-list-errorForeground);
}

.merge-queue-title {
	font-weight: bold;
	font-size: larger;
}

/** Theming */

.vscode-high-contrast button:not(.secondary):not(.icon-button) {
	background: var(--vscode-button-background);
}


.vscode-high-contrast input {
	outline: none;
	background: var(--vscode-input-background);
	border: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast button:focus {
	border: 1px solid var(--vscode-contrastActiveBorder);
}

.vscode-high-contrast button:hover {
	border: 1px dotted var(--vscode-contrastActiveBorder);
}

::-webkit-scrollbar-corner {
	display: none;
}

.labels-list {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.label {
	display: flex;
	justify-content: normal;
	padding: 0 8px;
	border-radius: 20px;
	border-style: solid;
	border-width: 1px;
	background: var(--vscode-badge-background);
	color: var(--vscode-badge-foreground);
	font-size: 11px;
	line-height: 18px;
	font-weight: 600;
}

/* split button */

.primary-split-button {
	display: flex;
	flex-grow: 1;
	min-width: 0;
	max-width: 260px;
}

button.split-left {
	border-radius: 2px 0 0 2px;
	flex-grow: 1;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	display: flex;
}

.split {
	background-color: var(--vscode-button-background);
	border-top: 1px solid var(--vscode-button-border);
	border-bottom: 1px solid var(--vscode-button-border);
	padding: 4px 0;
}

.split .separator {
	height: 100%;
	width: 1px;
	background-color: var(--vscode-button-separator);
}

.split.disabled {
	opacity: 0.4;
}

.split.secondary {
	background-color: var(--vscode-button-secondaryBackground);
	border-top: 1px solid var(--vscode-button-secondaryBorder);
	border-bottom: 1px solid var(--vscode-button-secondaryBorder);
}

button.split-right {
	border-radius: 0 2px 2px 0;
	cursor: pointer;
	width: 24px;
	position: relative;
}

button.split-right:disabled {
	cursor: default;
}

button.split-right .icon {
	pointer-events: none;
	position: absolute;
	top: 4px;
	right: 4px;
}

button.split-right .icon svg path {
	fill: unset;
}

button.input-box {
	display: block;
	height: 24px;
	margin-top: -4px;
	padding-top: 2px;
	padding-left: 8px;
	text-align: left;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: var(--vscode-input-foreground) !important;
	background-color: var(--vscode-input-background) !important;
}

button.input-box:active,
button.input-box:focus {
	color: var(--vscode-inputOption-activeForeground) !important;
	background-color: var(--vscode-inputOption-activeBackground) !important;
}

button.input-box:hover:not(:disabled) {
	background-color: var(--vscode-inputOption-hoverBackground) !important;
}

button.input-box:focus {
	border-color: var(--vscode-focusBorder) !important;
}

.dropdown-container {
	display: flex;
	min-width: 0;
	margin: 0;
}

.dropdown-container.spreadable {
	flex-grow: 1;
	width: 100%;
}

button.inlined-dropdown {
	width: 100%;
	max-width: 150px;
	margin-right: 8px;
	display: inline-block;
	text-align: center;
}

button.inlined-dropdown:last-child {
	margin-right: 0;
}

.spinner {
	margin-top: 5px;
	margin-left: 5px;
}

.commit-spinner-inline {
	margin-left: 8px;
	display: inline-flex;
	align-items: center;
	vertical-align: middle;
	grid-column: none;
}

.commit-spinner-before {
	margin-right: 6px;
	display: inline-flex;
	align-items: center;
	vertical-align: middle;
}

.loading {
	animation: spinner-rotate 1s linear infinite;
}

@keyframes spinner-rotate {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}`,""]);const D=h},3554:(_,k,j)=>{"use strict";j.d(k,{A:i(()=>D,"A")});var K=j(1601),V=j.n(K),L=j(6314),C=j.n(L),h=C()(V());h.push([_.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

#app {
	display: grid;
	grid-template-columns: 1fr minmax(200px, 300px);
	column-gap: 32px;
}

#title {
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row: 1;
}

#main {
	grid-column: 1;
	grid-row: 2;
	display: flex;
	flex-direction: column;
	gap: 16px;
}

#sidebar {
	display: flex;
	flex-direction: column;
	gap: 16px;
	grid-column: 2;
	grid-row: 2;
}

#project a {
	cursor: pointer;
}

a:focus,
input:focus,
select:focus,
textarea:focus,
.title-text:focus {
	outline: 1px solid var(--vscode-focusBorder);
}

.title-text {
	margin-right: 5px;
}

.title {
	display: flex;
	align-items: flex-start;
	margin: 20px 0 24px;
	padding-bottom: 24px;
	border-bottom: 1px solid var(--vscode-list-inactiveSelectionBackground);
}

.title .pr-number {
	margin-left: 5px;
}

.loading-indicator {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.loading-button {
	display: inline-flex;
	align-items: center;
	margin-right: 4px;
}

.comment-body li div {
	display: inline;
}

.comment-body li div.Box,
.comment-body li div.Box div {
	display: block;
}

.comment-body code,
.comment-body a,
span.lineContent {
	overflow-wrap: anywhere;
}

.comment-reactions {
	display: flex;
	flex-direction: row;
}

.comment-reactions div {
	font-size: 1.1em;
	cursor: pointer;
	user-select: none;
}

.comment-reactions .reaction-label {
	border-radius: 5px;
	border: 1px solid var(--vscode-panel-border);
	width: 14px;
}

#title:empty {
	border: none;
}

h2 {
	margin: 0;
}

body hr {
	display: block;
	height: 1px;
	border: 0;
	border-top: 1px solid #555;
	margin: 0 !important;
	padding: 0;
}

body .comment-container .avatar-container {
	margin-right: 12px;
}

body .comment-container .avatar-container a {
	display: flex;
}

body .comment-container .avatar-container img.avatar,
body .comment-container .avatar-container .avatar-icon svg {
	margin-right: 0;
}

.vscode-light .avatar-icon {
	filter: invert(100%);
}

body a.avatar-link:focus {
	outline-offset: 2px;
}

body .comment-container.comment,
body .comment-container.review {
	background-color: var(--vscode-editor-background);
}

.review-comment-container {
	width: 100%;
	max-width: 1000px;
	display: flex;
	flex-direction: column;
	position: relative;
}

body #main .comment-container>.review-comment-container>.review-comment-header:not(:nth-last-child(2)) {
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
}

body .comment-container .review-comment-header {
	position: relative;
	display: flex;
	width: 100%;
	box-sizing: border-box;
	padding: 8px 16px;
	color: var(--vscode-foreground);
	align-items: center;
	background: var(--vscode-editorWidget-background);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.review-comment-header.no-details {
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

.description-header {
	float: right;
	height: 32px;
}

.review-comment-header .comment-actions {
	margin-left: auto;
}

.review-comment-header .pending {
	color: inherit;
	font-style: italic;
}

.comment-actions button {
	background-color: transparent;
	padding: 0;
	line-height: normal;
	font-size: 11px;
}

.comment-actions button svg {
	margin-right: 0;
	height: 14px;
}

.comment-actions .icon-button {
	padding-left: 2px;
	padding-top: 2px;
}

.status-scroll {
	max-height: 220px;
	overflow-y: auto;
}

.status-check {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 16px;
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
}

.status-check-details {
	display: flex;
	align-items: center;
	gap: 8px;
}

#merge-on-github {
	margin-top: 10px;
}

.status-item {
	padding: 12px 16px;
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
}

.status-item:first-of-type {
	background: var(--vscode-editorWidget-background);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.status-item,
.form-actions,
.ready-for-review-text-wrapper {
	display: flex;
	gap: 8px;
	align-items: center;
}

.status-item .button-container {
	margin-left: auto;
	margin-right: 0;
}

.commit-association {
	display: flex;
	font-style: italic;
	flex-direction: row-reverse;
	padding-top: 7px;
}

.commit-association span {
	flex-direction: row;
}

.email {
	font-weight: bold;
}

button.input-box {
	float: right;
}

.status-item-detail-text {
	display: flex;
	gap: 8px;
}

.status-check-detail-text {
	margin-right: 8px;
}

.status-section p {
	margin: 0;
}

.status-section .check svg path {
	fill: var(--vscode-issues-open);
}

.status-section .close svg path {
	fill: var(--vscode-errorForeground);
}

.status-section .pending svg path,
.status-section .skip svg path {
	fill: var(--vscode-list-warningForeground);
}

.merge-queue-container,
.ready-for-review-container {
	padding: 16px;
	background-color: var(--vscode-editorWidget-background);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.ready-for-review-container .button-container {
	flex-direction: row;
	display: flex;
	align-items: center;
}

.ready-for-review-icon {
	width: 16px;
	height: 16px;
}

.ready-for-review-heading {
	font-weight: 600;
}

.ready-for-review-meta {
	font-size: 0.9;
}

#status-checks {
	border: 1px solid var(--vscode-editorHoverWidget-border);
	border-radius: 4px;
}

#status-checks .label {
	display: inline-flex;
	margin-right: 16px;
}

#status-checks a {
	cursor: pointer;
}

#status-checks summary {
	display: flex;
	align-items: center;
}

#status-checks-display-button {
	margin-left: auto;
}

#status-checks .avatar-link svg {
	width: 24px;
	margin-right: 0px;
	vertical-align: middle;
}

.status-check .avatar-link .avatar-icon {
	margin-right: 0px;
}

#status-checks .merge-select-container {
	display: flex;
	align-items: center;
	background-color: var(--vscode-editorWidget-background);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

#status-checks .merge-select-container>* {
	margin-right: 5px;
}

#status-checks .merge-select-container>select {
	margin-left: 5px;
}

#status-checks .branch-status-container {
	display: inline-block;
}

#status-checks .branch-status-message {
	display: inline-block;
	line-height: 100%;
	padding: 16px;
}

body .comment-container .review-comment-header>span,
body .comment-container .review-comment-header>a,
body .merged .merged-message>a {
	margin-right: 6px;
}

body .commit .commit-message>a {
	margin-right: 3px;
}

body .comment-container .review-comment-container .pending-label,
body .resolved-container .outdatedLabel {
	background: var(--vscode-badge-background);
	color: var(--vscode-badge-foreground);
	font-size: 11px;
	font-weight: 600;
	border-radius: 20px;
	padding: 4px 8px;
	margin-left: 6px;
}

body .resolved-container .unresolvedLabel {
	font-style: italic;
	margin-left: 5px;
}

body .diff .diffPath {
	margin-right: 4px;
}

.comment-container form,
#merge-comment-form {
	padding: 16px;
	background-color: var(--vscode-editorWidget-background);
}

body .comment-container .comment-body,
.review-body {
	padding: 16px;
	border-top: none;
}

body .comment-container .review-comment-container .review-comment-body {
	display: flex;
	flex-direction: column;
	gap: 16px;
	border: none;
}

body .comment-container .comment-body>p,
body .comment-container .comment-body>div>p,
body .comment-container .comment-body>div>ul,
.comment-container .review-body>p {
	margin-top: 0;
	line-height: 1.5em;
}

body .comment-container .comment-body>p:last-child,
body .comment-container .comment-body>div>p:last-child,
.comment-container .review-body>p:last-child {
	margin-bottom: 0;
}

body {
	margin: auto;
	width: 100%;
	max-width: 1280px;
	padding: 0 32px;
	box-sizing: border-box;
}

body .hidden-focusable {
	height: 0 !important;
	overflow: hidden;
}

.comment-actions button:hover:enabled,
.comment-actions button:focus:enabled {
	background-color: transparent;
}

body button.checkedOut {
	color: var(--vscode-foreground);
	opacity: 1 !important;
	background-color: transparent;
}

body button .icon {
	width: 16px;
	height: 16px;
}

.prIcon {
	display: flex;
	border-radius: 10px;
	margin-right: 5px;
	margin-top: 18px;
}

.overview-title {
	display: flex;
	align-items: center;
}

.overview-title h2 {
	font-size: 32px;
	margin-right: 6px;
}

.overview-title textarea {
	min-height: 50px;
}

.title-container {
	width: 100%;
}

.subtitle {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	row-gap: 12px;
}

.subtitle .avatar,
.subtitle .avatar-icon svg {
	margin-right: 6px;
}

.subtitle .author {
	display: flex;
	align-items: center;
}

.merge-branches {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	flex-wrap: wrap;
}

.branch-tag {
	margin-top: 3px;
	padding: 2px 4px;
	background: var(--vscode-editorInlayHint-background);
	color: var(--vscode-editorInlayHint-foreground);
	border-radius: 4px;
}

.subtitle .created-at {
	margin-left: auto;
	white-space: nowrap;
}

.button-group {
	display: flex;
	gap: 8px;
	flex-wrap: wrap;
	align-items: flex-start;
}

small-button {
	display: flex;
	font-size: 11px;
	padding: 0 5px;
}

.header-actions {
	display: flex;
	gap: 8px;
	padding-top: 4px;
}

.header-actions>div:first-of-type {
	flex: 1;
}

:not(.status-item)>.small-button {
	font-weight: 600;
}

#status {
	box-sizing: border-box;
	line-height: 18px;
	color: var(--vscode-button-foreground);
	border-radius: 18px;
	padding: 4px 12px;
	margin-right: 10px;
	font-weight: 600;
	display: flex;
	gap: 4px;
}

#status svg path {
	fill: var(--vscode-button-foreground);
}

.vscode-high-contrast #status {
	border: 1px solid var(--vscode-contrastBorder);
	background-color: var(--vscode-badge-background);
	color: var(--vscode-badge-foreground);
}

.vscode-high-contrast #status svg path {
	fill: var(--vscode-badge-foreground);
}

.status-badge-merged {
	background-color: var(--vscode-pullRequests-merged);
}

.status-badge-open {
	background-color: var(--vscode-pullRequests-open);
}

.status-badge-closed {
	background-color: var(--vscode-pullRequests-closed);
}

.status-badge-draft {
	background-color: var(--vscode-pullRequests-draft);
}

.section {
	padding-bottom: 16px;
	border-bottom: 1px solid var(--vscode-editorWidget-border);
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.section:last-of-type {
	padding-bottom: 0px;
	border-bottom: none;
}

.section-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.section-header.clickable {
	cursor: pointer;
}

.section-header .section-title {
	font-weight: 600;
}

.section-placeholder {
	color: var(--vscode-descriptionForeground);
}

.assign-yourself:hover {
	cursor: pointer;
}

.section svg {
	width: 16px;
	height: 16px;
	display: block;
	margin-right: 0;
}

.section .icon-button,
.section .icon-button .icon {
	color: currentColor;
}

.icon-button-group {
	display: flex;
	flex-direction: row;
}

.section svg path {
	fill: currentColor;
}

.commit svg {
	width: 16px;
	height: auto;
	margin-right: 8px;
	flex-shrink: 0;
}

.comment-container.commit {
	border: none;
	padding: 4px 16px;
}

.comment-container.commit,
.comment-container.merged {
	box-sizing: border-box;
}

.commit,
.review,
.merged {
	display: flex;
	width: 100%;
	border: none;
	color: var(--vscode-foreground);
}

.review {
	margin: 0px 8px;
	padding: 4px 0;
}

.commit .commit-message,
.commit .timeline-with-detail,
.merged .merged-message {
	align-items: center;
	overflow: hidden;
	flex-grow: 1;
}

.commit .commit-message,
.merged .merged-message {
	display: flex;
}

.commit .timeline-with-detail {
	display: block;
}

.commit-message-detail {
	margin-left: 20px;
}

.commit .commit-message .avatar-container,
.merged .merged-message .avatar-container {
	margin-right: 4px;
	flex-shrink: 0;
}

.commit-message .icon {
	padding-top: 2px;
}

.commit .avatar-container .avatar,
.commit .avatar-container .avatar-icon,
.commit .avatar-container .avatar-icon svg,
.merged .avatar-container .avatar,
.merged .avatar-container .avatar-icon,
.merged .avatar-container .avatar-icon svg {
	width: 18px;
	height: 18px;
}

.message-container {
	display: inline-grid;
}

.commit .commit-message .message,
.merged .merged-message .message {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.commit .commit-message a.message {
	cursor: pointer;
}

.timeline-detail {
	display: flex;
	align-items: center;
	gap: 8px;
}

.commit .sha {
	min-width: 50px;
	font-family: var(--vscode-editor-font-family);
	margin-bottom: -2px;
	cursor: pointer;
}

.merged .merged-message .message,
.merged .inline-sha {
	margin: 0 4px 0 0;
}

.merged svg {
	width: 14px;
	height: auto;
	margin-right: 8px;
	flex-shrink: 0;
}

.details {
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 100%;
}

#description .comment-container {
	padding-top: 0px;
}

.comment-container {
	position: relative;
	width: 100%;
	display: flex;
	margin: 0;
	align-items: center;
	border-radius: 4px;
	border: 1px solid var(--vscode-editorHoverWidget-border);
}

.comment-container[data-type='commit'] {
	padding: 8px 0;
	border: none;
}

.comment-container[data-type='commit']+.comment-container[data-type='commit'] {
	border-top: none;
}

.comment-body .review-comment {
	box-sizing: border-box;
	border-top: 1px solid var(--vscode-editorHoverWidget-border);
}

.resolve-comment-row {
	display: flex;
	align-items: center;
	padding: 16px;
	background-color: var(--vscode-editorHoverWidget-background);
	border-top: 1px solid var(--vscode-editorHoverWidget-border);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

.review-comment-container .review-comment .review-comment-header {
	padding: 16px 16px 8px 16px;
	border: none;
	background: none;
}

.review-comment-container .review-comment .comment-body {
	border: none;
	padding: 0px 16px 8px 16px;
}

.review-comment-container .review-comment .comment-body:last-of-type {
	padding: 0px 16px 16px 16px;
}

.comment-body .line {
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 8px;
}

body .comment-form {
	padding: 20px 0 10px;
}

.review-comment-container .comment-form {
	margin: 0 0 0 36px;
	padding: 10px 0;
}

.task-list-item {
	list-style-type: none;
}

#status-checks textarea {
	margin-top: 10px;
}

textarea {
	min-height: 100px;
	max-height: 500px;
}

.editing-form {
	padding: 5px 0;
	display: flex;
	flex-direction: row;
	min-width: 300px;
}

.editing-form .form-actions {
	display: flex;
	gap: 8px;
	justify-content: flex-end;
}

.comment-form .form-actions>button,
.comment-form .form-actions>input[type='submit'] {
	margin-right: 0;
	margin-left: 0;
}

.primary-split-button {
	flex-grow: unset;
}

:not(.button-group) .dropdown-container {
	justify-content: right;
}

:not(.title-editing-form)>.form-actions {
	justify-content: flex-end;
	padding-top: 10px;
}

#rebase-actions {
	flex-direction: row-reverse;
}

.main-comment-form>.form-actions {
	margin-bottom: 10px;
}

.details .comment-body {
	padding: 19px 0;
}

blockquote {
	display: block;
	flex-direction: column;
	margin: 8px 0;
	padding: 8px 12px;
	border-left-width: 5px;
	border-left-style: solid;
}

blockquote p {
	margin: 8px 0;
}

blockquote p:first-child {
	margin-top: 0;
}

blockquote p:last-child {
	margin-bottom: 0;
}

.comment-body a:focus,
.comment-body input:focus,
.comment-body select:focus,
.comment-body textarea:focus {
	outline-offset: -1px;
}

.comment-body hr {
	border: 0;
	height: 2px;
	border-bottom: 2px solid;
}

.comment-body h1 {
	padding-bottom: 0.3em;
	line-height: 1.2;
	border-bottom-width: 1px;
	border-bottom-style: solid;
}

.comment-body h1,
h2,
h3 {
	font-weight: normal;
}

.comment-body h1 code,
.comment-body h2 code,
.comment-body h3 code,
.comment-body h4 code,
.comment-body h5 code,
.comment-body h6 code {
	font-size: inherit;
	line-height: auto;
}

.comment-body table {
	border-collapse: collapse;
}

.comment-body table>thead>tr>th {
	text-align: left;
	border-bottom: 1px solid;
}

.comment-body table>thead>tr>th,
.comment-body table>thead>tr>td,
.comment-body table>tbody>tr>th,
.comment-body table>tbody>tr>td {
	padding: 5px 10px;
}

.comment-body table>tbody>tr+tr>td {
	border-top: 1px solid;
}

code {
	font-family: var(--vscode-editor-font-family), Menlo, Monaco, Consolas, 'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback';
}

.comment-body .snippet-clipboard-content {
	display: grid;
}

.comment-body video {
	width: 100%;
	border: 1px solid var(--vscode-editorWidget-border);
	border-radius: 4px;
}

.comment-body summary {
	margin-bottom: 8px;
}

.comment-body details summary::marker {
	display: flex;
}

.comment-body details summary svg {
	margin-left: 8px;
}

.comment-body body.wordWrap pre {
	white-space: pre-wrap;
}

.comment-body .mac code {
	font-size: 12px;
	line-height: 18px;
}

.comment-body pre:not(.hljs),
.comment-body pre.hljs code>div {
	padding: 16px;
	border-radius: 3px;
	overflow: auto;
}

.timestamp,
.timestamp:hover {
	color: var(--vscode-descriptionForeground);
	white-space: nowrap;
}

.timestamp {
	overflow: hidden;
	text-overflow: ellipsis;
	padding-left: 8px;
}

/** Theming */

.comment-body pre code {
	color: var(--vscode-editor-foreground);
}

.vscode-light .comment-body pre:not(.hljs),
.vscode-light .comment-body code>div {
	background-color: rgba(220, 220, 220, 0.4);
}

.vscode-dark .comment-body pre:not(.hljs),
.vscode-dark .comment-body code>div {
	background-color: rgba(10, 10, 10, 0.4);
}

.vscode-high-contrast .comment-body pre:not(.hljs),
.vscode-high-contrast .comment-body code>div {
	background-color: var(--vscode-editor-background);
	border: 1px solid var(--vscode-panel-border);
}

.vscode-high-contrast .comment-body h1 {
	border: 1px solid rgb(0, 0, 0);
}

.vscode-high-contrast .comment-container .review-comment-header,
.vscode-high-contrast #status-checks {
	background: none;
	border: 1px solid var(--vscode-panel-border);
}

.vscode-high-contrast .comment-container .comment-body,
.vscode-high-contrast .review-comment-container .review-body {
	border: 1px solid var(--vscode-panel-border);
}

.vscode-light .comment-body table>thead>tr>th {
	border-color: rgba(0, 0, 0, 0.69);
}

.vscode-dark .comment-body table>thead>tr>th {
	border-color: rgba(255, 255, 255, 0.69);
}

.vscode-light .comment-body h1,
.vscode-light .comment-body hr,
.vscode-light .comment-body table>tbody>tr+tr>td {
	border-color: rgba(0, 0, 0, 0.18);
}

.vscode-dark .comment-body h1,
.vscode-dark .comment-body hr,
.vscode-dark .comment-body table>tbody>tr+tr>td {
	border-color: rgba(255, 255, 255, 0.18);
}

.review-comment-body .diff-container {
	border-radius: 4px;
	border: 1px solid var(--vscode-editorHoverWidget-border);
}

.review-comment-body .diff-container .review-comment-container .comment-container {
	padding-top: 0;
}

.review-comment-body .diff-container .comment-container {
	border: none;
}

.review-comment-body .diff-container .review-comment-container .review-comment-header .avatar-container {
	margin-right: 4px;
}

.review-comment-body .diff-container .review-comment-container .review-comment-header .avatar {
	width: 18px;
	height: 18px;
}

.review-comment-body .diff-container .diff {
	border-top: 1px solid var(--vscode-editorWidget-border);
	overflow: scroll;
}

.resolved-container {
	padding: 6px 12px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: var(--vscode-editorWidget-background);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.resolved-container .diffPath:hover {
	text-decoration: underline;
	color: var(--vscode-textLink-activeForeground);
	cursor: pointer;
}

.diff .diffLine {
	display: flex;
	font-size: 12px;
	line-height: 20px;
}

.win32 .diff .diffLine {
	font-family: var(--vscode-editor-font-family), Consolas, Inconsolata, 'Courier New', monospace;
}

.darwin .diff .diffLine {
	font-family: var(--vscode-editor-font-family), Monaco, Menlo, Inconsolata, 'Courier New', monospace;
}

.linux .diff .diffLine {
	font-family: var(--vscode-editor-font-family), 'Droid Sans Mono', Inconsolata, 'Courier New', monospace, 'Droid Sans Fallback';
}

.diff .diffLine.add {
	background-color: var(--vscode-diffEditor-insertedTextBackground);
}

.diff .diffLine.delete {
	background-color: var(--vscode-diffEditor-removedTextBackground);
}

.diff .diffLine .diffTypeSign {
	user-select: none;
	padding-right: 5px;
}

.diff .diffLine .lineNumber {
	width: 1%;
	min-width: 50px;
	padding-right: 10px;
	padding-left: 10px;
	font-size: 12px;
	line-height: 20px;
	text-align: right;
	white-space: nowrap;
	box-sizing: border-box;
	display: block;
	user-select: none;
	font-family: var(--vscode-editor-font-family);
}

.github-checkbox {
	pointer-events: none;
}

.github-checkbox input {
	color: rgb(84, 84, 84);
	opacity: 0.6;
}

/* High Contrast Mode */

.vscode-high-contrast a:focus {
	outline-color: var(--vscode-contrastActiveBorder);
}

.vscode-high-contrast .title {
	border-bottom: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast .diff .diffLine {
	background: none;
}

.vscode-high-contrast .resolved-container {
	background: none;
}

.vscode-high-contrast .diff-container {
	border: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast .diff .diffLine.add {
	border: 1px dashed var(--vscode-diffEditor-insertedTextBorder);
}

.vscode-high-contrast .diff .diffLine.delete {
	border: 1px dashed var(--vscode-diffEditor-removedTextBorder);
}

@media (max-width: 768px) {
	.title {
		border-bottom: none;
		padding-bottom: 0px;
	}

	#app {
		display: block;
	}

	#sidebar {
		display: grid;
		column-gap: 20px;
		row-gap: 12px;
		grid-template-columns: calc(50% - 10px) calc(50% - 10px);
		padding: 0;
	}

	.section-content {
		display: flex;
		flex-wrap: wrap;
	}

	.section-item {
		display: flex;
	}

	body .hidden-focusable {
		height: initial;
		overflow: initial;
	}

	.section-header button {
		display: flex;
	}

	.section-item .login {
		width: auto;
		margin-right: 4px;
	}

	/* Hides bottom borders on bottom two sections */
	.section:nth-last-child(-n + 2) {
		border-bottom: none;
	}
}

.icon {
	width: 16px;
	height: 16px;
	font-size: 16px;
	display: flex;
}

.icon.copilot-icon {
	margin-right: 6px;
}

.action-bar {
	position: absolute;
	display: flex;
	justify-content: space-between;
	z-index: 100;
	top: 9px;
	right: 9px;
}

.flex-action-bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
	margin-left: 9px;
	min-width: 42px;
}

.action-bar>button,
.flex-action-bar>button {
	margin-left: 4px;
	margin-right: 4px;
}

.title-editing-form {
	flex-grow: 1;
}

.title-editing-form>.form-actions {
	margin-left: 8px;
}

/* permalinks */
.comment-body .Box p {
	margin-block-start: 0px;
	margin-block-end: 0px;
}

.comment-body .Box {
	border-radius: 4px;
	border-style: solid;
	border-width: 1px;
	border-color: var(--vscode-editorHoverWidget-border);
}

.comment-body .Box-header {
	background-color: var(--vscode-editorWidget-background);
	color: var(--vscode-disabledForeground);
	border-bottom-style: solid;
	border-bottom-width: 1px;
	padding: 8px 16px;
	border-bottom-color: var(--vscode-editorHoverWidget-border);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.comment-body .blob-num {
	word-wrap: break-word;
	box-sizing: border-box;
	border: 0 !important;
	padding-top: 0 !important;
	padding-bottom: 0 !important;
	min-width: 50px;
	font-family: var(--vscode-editor-font-family);
	font-size: 12px;
	color: var(--vscode-editorLineNumber-foreground);
	line-height: 20px;
	text-align: right;
	white-space: nowrap;
	vertical-align: top;
	cursor: pointer;
	user-select: none;
}

.comment-body .blob-num::before {
	content: attr(data-line-number);
}

.comment-body .blob-code-inner {
	tab-size: 8;
	border: 0 !important;
	padding-top: 0 !important;
	padding-bottom: 0 !important;
	line-height: 20px;
	vertical-align: top;
	display: table-cell;
	overflow: visible;
	font-family: var(--vscode-editor-font-family);
	font-size: 12px;
	word-wrap: anywhere;
	text-indent: 0;
	white-space: pre-wrap;
}

.comment-body .commit-tease-sha {
	font-family: var(--vscode-editor-font-family);
	font-size: 12px;
}

/* Suggestion */
.comment-body .blob-wrapper.data.file .d-table {
	border-radius: 4px;
	border-style: solid;
	border-width: 1px;
	border-collapse: unset;
	border-color: var(--vscode-editorHoverWidget-border);
}

.comment-body .js-suggested-changes-blob {
	border-collapse: collapse;
}

.blob-code-deletion,
.blob-num-deletion {
	border-collapse: collapse;
	background-color: var(--vscode-diffEditor-removedLineBackground);
}

.blob-code-addition,
.blob-num-addition {
	border-collapse: collapse;
	background-color: var(--vscode-diffEditor-insertedLineBackground);
}

.blob-code-marker-addition::before {
	content: "+ ";
}

.blob-code-marker-deletion::before {
	content: "- ";
}

.markdown-alert.markdown-alert-warning {
	border-left: .25em solid var(--vscode-editorWarning-foreground);
}

.markdown-alert.markdown-alert-warning .markdown-alert-title {
	color: var(--vscode-editorWarning-foreground);
}

.markdown-alert.markdown-alert-note {
	border-left: .25em solid var(--vscode-editorInfo-foreground);
}

.markdown-alert.markdown-alert-note .markdown-alert-title {
	color: var(--vscode-editorInfo-foreground);
}

.markdown-alert.markdown-alert-tip {
	border-left: .25em solid var(--vscode-testing-iconPassed);
}

.markdown-alert.markdown-alert-tip .markdown-alert-title {
	color: var(--vscode-testing-iconPassed);
}

.markdown-alert.markdown-alert-important {
	border-left: .25em solid var(--vscode-statusBar-debuggingBackground);
}

.markdown-alert.markdown-alert-important .markdown-alert-title {
	color: var(--vscode-statusBar-debuggingBackground);
}

.markdown-alert.markdown-alert-caution {
	border-left: .25em solid var(--vscode-editorError-foreground);
}

.markdown-alert.markdown-alert-caution .markdown-alert-title {
	color: var(--vscode-editorError-foreground);
}

.markdown-alert {
	padding: .5rem .5rem;
	margin-bottom: 1rem;
	color: inherit;
}

.markdown-alert .markdown-alert-title {
	display: flex;
	align-items: center;
	line-height: 1;
}

.markdown-alert-title svg {
	padding-right: 3px;
}

.markdown-alert>:first-child {
	margin-top: 0;
}

svg.octicon path {
	display: inline-block;
	overflow: visible !important;
	vertical-align: text-bottom;
	fill: currentColor;
}

.collapsible-sidebar {
	border-top: 1px solid var(--vscode-editorWidget-border);
	border-bottom: 1px solid var(--vscode-editorWidget-border);
	margin-bottom: 24px;
}

.collapsible-sidebar-header {
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 16px 0px 8px;
	user-select: none;
	outline: none;
}

.collapsible-sidebar-header.expanded {
	padding: 8px 0px;
}

.collapsible-sidebar-header:focus {
	outline: 1px solid var(--vscode-focusBorder);
}

.collapsible-sidebar-title {
	font-size: 13px;
	width: 100%;
}

.collapsible-sidebar-content {
	padding-bottom: 16px;
}

.collapsed-label {
	gap: 8px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 8px 20px;
}

.collapsed-section {
	gap: 8px;
	display: inline-flex;
	align-items: center;
	min-width: 0;
	overflow: hidden;
	height: 22px;
}

.collapsed-section-label {
	padding-right: 4px;
	font-weight: 600;
	flex-shrink: 0;
}

.collapsed-section-count {
	color: var(--vscode-descriptionForeground);
}

.pill-container {
	display: flex;
	align-items: center;
	min-width: 0;
	flex: 1;
	flex-wrap: nowrap;
	overflow: hidden;
}

.pill-item {
	flex-shrink: 0;
	white-space: nowrap;
	border-radius: 20px;
	margin-right: 2px;
	border-style: none;
	text-overflow: ellipsis;
	max-width: -webkit-fill-available;
	overflow: hidden;
	display: inline-block;
}

.pill-overflow {
	color: var(--vscode-descriptionForeground);
	font-size: 13px;
	margin-left: 4px;
	flex-shrink: 0;
	white-space: nowrap;
}

.collapsed-section .stacked-avatar {
	position: absolute;
}

.avatar-stack {
	position: relative;
	height: 22px;
}

.collapsible-label-see-more {
	padding-bottom: 16px;
	display: block;
	font-size: 13px;
	cursor: pointer;
}`,""]);const D=h},6314:_=>{"use strict";_.exports=function(k){var j=[];return j.toString=i(function(){return this.map(function(V){var L="",C=typeof V[5]!="undefined";return V[4]&&(L+="@supports (".concat(V[4],") {")),V[2]&&(L+="@media ".concat(V[2]," {")),C&&(L+="@layer".concat(V[5].length>0?" ".concat(V[5]):""," {")),L+=k(V),C&&(L+="}"),V[2]&&(L+="}"),V[4]&&(L+="}"),L}).join("")},"toString"),j.i=i(function(V,L,C,h,D){typeof V=="string"&&(V=[[null,V,void 0]]);var A={};if(C)for(var B=0;B<this.length;B++){var H=this[B][0];H!=null&&(A[H]=!0)}for(var X=0;X<V.length;X++){var Y=[].concat(V[X]);C&&A[Y[0]]||(typeof D!="undefined"&&(typeof Y[5]=="undefined"||(Y[1]="@layer".concat(Y[5].length>0?" ".concat(Y[5]):""," {").concat(Y[1],"}")),Y[5]=D),L&&(Y[2]&&(Y[1]="@media ".concat(Y[2]," {").concat(Y[1],"}")),Y[2]=L),h&&(Y[4]?(Y[1]="@supports (".concat(Y[4],") {").concat(Y[1],"}"),Y[4]=h):Y[4]="".concat(h)),j.push(Y))}},"i"),j}},1601:_=>{"use strict";_.exports=function(k){return k[1]}},4353:function(_){(function(k,j){_.exports=j()})(this,function(){"use strict";var k="millisecond",j="second",K="minute",V="hour",L="day",C="week",h="month",D="quarter",A="year",B="date",H=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,X=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},Pe=i(function(Z,O,$){var oe=String(Z);return!oe||oe.length>=O?Z:""+Array(O+1-oe.length).join($)+Z},"$"),Fe={s:Pe,z:i(function(Z){var O=-Z.utcOffset(),$=Math.abs(O),oe=Math.floor($/60),J=$%60;return(O<=0?"+":"-")+Pe(oe,2,"0")+":"+Pe(J,2,"0")},"z"),m:i(function Z(O,$){if(O.date()<$.date())return-Z($,O);var oe=12*($.year()-O.year())+($.month()-O.month()),J=O.clone().add(oe,h),ue=$-J<0,he=O.clone().add(oe+(ue?-1:1),h);return+(-(oe+($-J)/(ue?J-he:he-J))||0)},"t"),a:i(function(Z){return Z<0?Math.ceil(Z)||0:Math.floor(Z)},"a"),p:i(function(Z){return{M:h,y:A,w:C,d:L,D:B,h:V,m:K,s:j,ms:k,Q:D}[Z]||String(Z||"").toLowerCase().replace(/s$/,"")},"p"),u:i(function(Z){return Z===void 0},"u")},pe="en",Oe={};Oe[pe]=Y;var it=i(function(Z){return Z instanceof ie},"m"),U=i(function(Z,O,$){var oe;if(!Z)return pe;if(typeof Z=="string")Oe[Z]&&(oe=Z),O&&(Oe[Z]=O,oe=Z);else{var J=Z.name;Oe[J]=Z,oe=J}return!$&&oe&&(pe=oe),oe||!$&&pe},"D"),R=i(function(Z,O){if(it(Z))return Z.clone();var $=typeof O=="object"?O:{};return $.date=Z,$.args=arguments,new ie($)},"v"),l=Fe;l.l=U,l.i=it,l.w=function(Z,O){return R(Z,{locale:O.$L,utc:O.$u,x:O.$x,$offset:O.$offset})};var ie=function(){function Z($){this.$L=U($.locale,null,!0),this.parse($)}i(Z,"d");var O=Z.prototype;return O.parse=function($){this.$d=function(oe){var J=oe.date,ue=oe.utc;if(J===null)return new Date(NaN);if(l.u(J))return new Date;if(J instanceof Date)return new Date(J);if(typeof J=="string"&&!/Z$/i.test(J)){var he=J.match(H);if(he){var ce=he[2]-1||0,Ce=(he[7]||"0").substring(0,3);return ue?new Date(Date.UTC(he[1],ce,he[3]||1,he[4]||0,he[5]||0,he[6]||0,Ce)):new Date(he[1],ce,he[3]||1,he[4]||0,he[5]||0,he[6]||0,Ce)}}return new Date(J)}($),this.$x=$.x||{},this.init()},O.init=function(){var $=this.$d;this.$y=$.getFullYear(),this.$M=$.getMonth(),this.$D=$.getDate(),this.$W=$.getDay(),this.$H=$.getHours(),this.$m=$.getMinutes(),this.$s=$.getSeconds(),this.$ms=$.getMilliseconds()},O.$utils=function(){return l},O.isValid=function(){return this.$d.toString()!=="Invalid Date"},O.isSame=function($,oe){var J=R($);return this.startOf(oe)<=J&&J<=this.endOf(oe)},O.isAfter=function($,oe){return R($)<this.startOf(oe)},O.isBefore=function($,oe){return this.endOf(oe)<R($)},O.$g=function($,oe,J){return l.u($)?this[oe]:this.set(J,$)},O.unix=function(){return Math.floor(this.valueOf()/1e3)},O.valueOf=function(){return this.$d.getTime()},O.startOf=function($,oe){var J=this,ue=!!l.u(oe)||oe,he=l.p($),ce=i(function(Mt,Be){var z=l.w(J.$u?Date.UTC(J.$y,Be,Mt):new Date(J.$y,Be,Mt),J);return ue?z:z.endOf(L)},"$"),Ce=i(function(Mt,Be){return l.w(J.toDate()[Mt].apply(J.toDate("s"),(ue?[0,0,0,0]:[23,59,59,999]).slice(Be)),J)},"l"),De=this.$W,He=this.$M,Ge=this.$D,Xe="set"+(this.$u?"UTC":"");switch(he){case A:return ue?ce(1,0):ce(31,11);case h:return ue?ce(1,He):ce(0,He+1);case C:var pt=this.$locale().weekStart||0,ht=(De<pt?De+7:De)-pt;return ce(ue?Ge-ht:Ge+(6-ht),He);case L:case B:return Ce(Xe+"Hours",0);case V:return Ce(Xe+"Minutes",1);case K:return Ce(Xe+"Seconds",2);case j:return Ce(Xe+"Milliseconds",3);default:return this.clone()}},O.endOf=function($){return this.startOf($,!1)},O.$set=function($,oe){var J,ue=l.p($),he="set"+(this.$u?"UTC":""),ce=(J={},J[L]=he+"Date",J[B]=he+"Date",J[h]=he+"Month",J[A]=he+"FullYear",J[V]=he+"Hours",J[K]=he+"Minutes",J[j]=he+"Seconds",J[k]=he+"Milliseconds",J)[ue],Ce=ue===L?this.$D+(oe-this.$W):oe;if(ue===h||ue===A){var De=this.clone().set(B,1);De.$d[ce](Ce),De.init(),this.$d=De.set(B,Math.min(this.$D,De.daysInMonth())).$d}else ce&&this.$d[ce](Ce);return this.init(),this},O.set=function($,oe){return this.clone().$set($,oe)},O.get=function($){return this[l.p($)]()},O.add=function($,oe){var J,ue=this;$=Number($);var he=l.p(oe),ce=i(function(He){var Ge=R(ue);return l.w(Ge.date(Ge.date()+Math.round(He*$)),ue)},"d");if(he===h)return this.set(h,this.$M+$);if(he===A)return this.set(A,this.$y+$);if(he===L)return ce(1);if(he===C)return ce(7);var Ce=(J={},J[K]=6e4,J[V]=36e5,J[j]=1e3,J)[he]||1,De=this.$d.getTime()+$*Ce;return l.w(De,this)},O.subtract=function($,oe){return this.add(-1*$,oe)},O.format=function($){var oe=this;if(!this.isValid())return"Invalid Date";var J=$||"YYYY-MM-DDTHH:mm:ssZ",ue=l.z(this),he=this.$locale(),ce=this.$H,Ce=this.$m,De=this.$M,He=he.weekdays,Ge=he.months,Xe=i(function(Be,z,ne,xe){return Be&&(Be[z]||Be(oe,J))||ne[z].substr(0,xe)},"h"),pt=i(function(Be){return l.s(ce%12||12,Be,"0")},"d"),ht=he.meridiem||function(Be,z,ne){var xe=Be<12?"AM":"PM";return ne?xe.toLowerCase():xe},Mt={YY:String(this.$y).slice(-2),YYYY:this.$y,M:De+1,MM:l.s(De+1,2,"0"),MMM:Xe(he.monthsShort,De,Ge,3),MMMM:Xe(Ge,De),D:this.$D,DD:l.s(this.$D,2,"0"),d:String(this.$W),dd:Xe(he.weekdaysMin,this.$W,He,2),ddd:Xe(he.weekdaysShort,this.$W,He,3),dddd:He[this.$W],H:String(ce),HH:l.s(ce,2,"0"),h:pt(1),hh:pt(2),a:ht(ce,Ce,!0),A:ht(ce,Ce,!1),m:String(Ce),mm:l.s(Ce,2,"0"),s:String(this.$s),ss:l.s(this.$s,2,"0"),SSS:l.s(this.$ms,3,"0"),Z:ue};return J.replace(X,function(Be,z){return z||Mt[Be]||ue.replace(":","")})},O.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},O.diff=function($,oe,J){var ue,he=l.p(oe),ce=R($),Ce=6e4*(ce.utcOffset()-this.utcOffset()),De=this-ce,He=l.m(this,ce);return He=(ue={},ue[A]=He/12,ue[h]=He,ue[D]=He/3,ue[C]=(De-Ce)/6048e5,ue[L]=(De-Ce)/864e5,ue[V]=De/36e5,ue[K]=De/6e4,ue[j]=De/1e3,ue)[he]||De,J?He:l.a(He)},O.daysInMonth=function(){return this.endOf(h).$D},O.$locale=function(){return Oe[this.$L]},O.locale=function($,oe){if(!$)return this.$L;var J=this.clone(),ue=U($,oe,!0);return ue&&(J.$L=ue),J},O.clone=function(){return l.w(this.$d,this)},O.toDate=function(){return new Date(this.valueOf())},O.toJSON=function(){return this.isValid()?this.toISOString():null},O.toISOString=function(){return this.$d.toISOString()},O.toString=function(){return this.$d.toUTCString()},Z}(),I=ie.prototype;return R.prototype=I,[["$ms",k],["$s",j],["$m",K],["$H",V],["$W",L],["$M",h],["$y",A],["$D",B]].forEach(function(Z){I[Z[1]]=function(O){return this.$g(O,Z[0],Z[1])}}),R.extend=function(Z,O){return Z.$i||(Z(O,ie,R),Z.$i=!0),R},R.locale=U,R.isDayjs=it,R.unix=function(Z){return R(1e3*Z)},R.en=Oe[pe],R.Ls=Oe,R.p={},R})},6279:function(_){(function(k,j){_.exports=j()})(this,function(){"use strict";return function(k,j,K){k=k||{};var V=j.prototype,L={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function C(D,A,B,H){return V.fromToBase(D,A,B,H)}i(C,"i"),K.en.relativeTime=L,V.fromToBase=function(D,A,B,H,X){for(var Y,Pe,Fe,pe=B.$locale().relativeTime||L,Oe=k.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],it=Oe.length,U=0;U<it;U+=1){var R=Oe[U];R.d&&(Y=H?K(D).diff(B,R.d,!0):B.diff(D,R.d,!0));var l=(k.rounding||Math.round)(Math.abs(Y));if(Fe=Y>0,l<=R.r||!R.r){l<=1&&U>0&&(R=Oe[U-1]);var ie=pe[R.l];X&&(l=X(""+l)),Pe=typeof ie=="string"?ie.replace("%d",l):ie(l,A,R.l,Fe);break}}if(A)return Pe;var I=Fe?pe.future:pe.past;return typeof I=="function"?I(Pe):I.replace("%s",Pe)},V.to=function(D,A){return C(D,A,this,!0)},V.from=function(D,A){return C(D,A,this)};var h=i(function(D){return D.$u?K.utc():K()},"d");V.toNow=function(D){return this.to(h(this),D)},V.fromNow=function(D){return this.from(h(this),D)}}})},3581:function(_){(function(k,j){_.exports=j()})(this,function(){"use strict";return function(k,j,K){K.updateLocale=function(V,L){var C=K.Ls[V];if(C)return(L?Object.keys(L):[]).forEach(function(h){C[h]=L[h]}),C}}})},7334:_=>{function k(j,K,V){var L,C,h,D,A;K==null&&(K=100);function B(){var X=Date.now()-D;X<K&&X>=0?L=setTimeout(B,K-X):(L=null,V||(A=j.apply(h,C),h=C=null))}i(B,"later");var H=i(function(){h=this,C=arguments,D=Date.now();var X=V&&!L;return L||(L=setTimeout(B,K)),X&&(A=j.apply(h,C),h=C=null),A},"debounced");return H.clear=function(){L&&(clearTimeout(L),L=null)},H.flush=function(){L&&(A=j.apply(h,C),h=C=null,clearTimeout(L),L=null)},H}i(k,"debounce"),k.debounce=k,_.exports=k},7007:_=>{"use strict";var k=typeof Reflect=="object"?Reflect:null,j=k&&typeof k.apply=="function"?k.apply:i(function(R,l,ie){return Function.prototype.apply.call(R,l,ie)},"ReflectApply"),K;k&&typeof k.ownKeys=="function"?K=k.ownKeys:Object.getOwnPropertySymbols?K=i(function(R){return Object.getOwnPropertyNames(R).concat(Object.getOwnPropertySymbols(R))},"ReflectOwnKeys"):K=i(function(R){return Object.getOwnPropertyNames(R)},"ReflectOwnKeys");function V(U){console&&console.warn&&console.warn(U)}i(V,"ProcessEmitWarning");var L=Number.isNaN||i(function(R){return R!==R},"NumberIsNaN");function C(){C.init.call(this)}i(C,"EventEmitter"),_.exports=C,_.exports.once=it,C.EventEmitter=C,C.prototype._events=void 0,C.prototype._eventsCount=0,C.prototype._maxListeners=void 0;var h=10;function D(U){if(typeof U!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof U)}i(D,"checkListener"),Object.defineProperty(C,"defaultMaxListeners",{enumerable:!0,get:i(function(){return h},"get"),set:i(function(U){if(typeof U!="number"||U<0||L(U))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+U+".");h=U},"set")}),C.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},C.prototype.setMaxListeners=i(function(R){if(typeof R!="number"||R<0||L(R))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+R+".");return this._maxListeners=R,this},"setMaxListeners");function A(U){return U._maxListeners===void 0?C.defaultMaxListeners:U._maxListeners}i(A,"_getMaxListeners"),C.prototype.getMaxListeners=i(function(){return A(this)},"getMaxListeners"),C.prototype.emit=i(function(R){for(var l=[],ie=1;ie<arguments.length;ie++)l.push(arguments[ie]);var I=R==="error",Z=this._events;if(Z!==void 0)I=I&&Z.error===void 0;else if(!I)return!1;if(I){var O;if(l.length>0&&(O=l[0]),O instanceof Error)throw O;var $=new Error("Unhandled error."+(O?" ("+O.message+")":""));throw $.context=O,$}var oe=Z[R];if(oe===void 0)return!1;if(typeof oe=="function")j(oe,this,l);else for(var J=oe.length,ue=Fe(oe,J),ie=0;ie<J;++ie)j(ue[ie],this,l);return!0},"emit");function B(U,R,l,ie){var I,Z,O;if(D(l),Z=U._events,Z===void 0?(Z=U._events=Object.create(null),U._eventsCount=0):(Z.newListener!==void 0&&(U.emit("newListener",R,l.listener?l.listener:l),Z=U._events),O=Z[R]),O===void 0)O=Z[R]=l,++U._eventsCount;else if(typeof O=="function"?O=Z[R]=ie?[l,O]:[O,l]:ie?O.unshift(l):O.push(l),I=A(U),I>0&&O.length>I&&!O.warned){O.warned=!0;var $=new Error("Possible EventEmitter memory leak detected. "+O.length+" "+String(R)+" listeners added. Use emitter.setMaxListeners() to increase limit");$.name="MaxListenersExceededWarning",$.emitter=U,$.type=R,$.count=O.length,V($)}return U}i(B,"_addListener"),C.prototype.addListener=i(function(R,l){return B(this,R,l,!1)},"addListener"),C.prototype.on=C.prototype.addListener,C.prototype.prependListener=i(function(R,l){return B(this,R,l,!0)},"prependListener");function H(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}i(H,"onceWrapper");function X(U,R,l){var ie={fired:!1,wrapFn:void 0,target:U,type:R,listener:l},I=H.bind(ie);return I.listener=l,ie.wrapFn=I,I}i(X,"_onceWrap"),C.prototype.once=i(function(R,l){return D(l),this.on(R,X(this,R,l)),this},"once"),C.prototype.prependOnceListener=i(function(R,l){return D(l),this.prependListener(R,X(this,R,l)),this},"prependOnceListener"),C.prototype.removeListener=i(function(R,l){var ie,I,Z,O,$;if(D(l),I=this._events,I===void 0)return this;if(ie=I[R],ie===void 0)return this;if(ie===l||ie.listener===l)--this._eventsCount===0?this._events=Object.create(null):(delete I[R],I.removeListener&&this.emit("removeListener",R,ie.listener||l));else if(typeof ie!="function"){for(Z=-1,O=ie.length-1;O>=0;O--)if(ie[O]===l||ie[O].listener===l){$=ie[O].listener,Z=O;break}if(Z<0)return this;Z===0?ie.shift():pe(ie,Z),ie.length===1&&(I[R]=ie[0]),I.removeListener!==void 0&&this.emit("removeListener",R,$||l)}return this},"removeListener"),C.prototype.off=C.prototype.removeListener,C.prototype.removeAllListeners=i(function(R){var l,ie,I;if(ie=this._events,ie===void 0)return this;if(ie.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):ie[R]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete ie[R]),this;if(arguments.length===0){var Z=Object.keys(ie),O;for(I=0;I<Z.length;++I)O=Z[I],O!=="removeListener"&&this.removeAllListeners(O);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(l=ie[R],typeof l=="function")this.removeListener(R,l);else if(l!==void 0)for(I=l.length-1;I>=0;I--)this.removeListener(R,l[I]);return this},"removeAllListeners");function Y(U,R,l){var ie=U._events;if(ie===void 0)return[];var I=ie[R];return I===void 0?[]:typeof I=="function"?l?[I.listener||I]:[I]:l?Oe(I):Fe(I,I.length)}i(Y,"_listeners"),C.prototype.listeners=i(function(R){return Y(this,R,!0)},"listeners"),C.prototype.rawListeners=i(function(R){return Y(this,R,!1)},"rawListeners"),C.listenerCount=function(U,R){return typeof U.listenerCount=="function"?U.listenerCount(R):Pe.call(U,R)},C.prototype.listenerCount=Pe;function Pe(U){var R=this._events;if(R!==void 0){var l=R[U];if(typeof l=="function")return 1;if(l!==void 0)return l.length}return 0}i(Pe,"listenerCount"),C.prototype.eventNames=i(function(){return this._eventsCount>0?K(this._events):[]},"eventNames");function Fe(U,R){for(var l=new Array(R),ie=0;ie<R;++ie)l[ie]=U[ie];return l}i(Fe,"arrayClone");function pe(U,R){for(;R+1<U.length;R++)U[R]=U[R+1];U.pop()}i(pe,"spliceOne");function Oe(U){for(var R=new Array(U.length),l=0;l<R.length;++l)R[l]=U[l].listener||U[l];return R}i(Oe,"unwrapListeners");function it(U,R){return new Promise(function(l,ie){function I(){Z!==void 0&&U.removeListener("error",Z),l([].slice.call(arguments))}i(I,"eventListener");var Z;R!=="error"&&(Z=i(function($){U.removeListener(R,I),ie($)},"errorListener"),U.once("error",Z)),U.once(R,I)})}i(it,"once")},5228:_=>{"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var k=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;function V(C){if(C==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(C)}i(V,"toObject");function L(){try{if(!Object.assign)return!1;var C=new String("abc");if(C[5]="de",Object.getOwnPropertyNames(C)[0]==="5")return!1;for(var h={},D=0;D<10;D++)h["_"+String.fromCharCode(D)]=D;var A=Object.getOwnPropertyNames(h).map(function(H){return h[H]});if(A.join("")!=="0123456789")return!1;var B={};return"abcdefghijklmnopqrst".split("").forEach(function(H){B[H]=H}),Object.keys(Object.assign({},B)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}i(L,"shouldUseNative"),_.exports=L()?Object.assign:function(C,h){for(var D,A=V(C),B,H=1;H<arguments.length;H++){D=Object(arguments[H]);for(var X in D)j.call(D,X)&&(A[X]=D[X]);if(k){B=k(D);for(var Y=0;Y<B.length;Y++)K.call(D,B[Y])&&(A[B[Y]]=D[B[Y]])}}return A}},7975:_=>{"use strict";function k(L){if(typeof L!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(L))}i(k,"assertPath");function j(L,C){for(var h="",D=0,A=-1,B=0,H,X=0;X<=L.length;++X){if(X<L.length)H=L.charCodeAt(X);else{if(H===47)break;H=47}if(H===47){if(!(A===X-1||B===1))if(A!==X-1&&B===2){if(h.length<2||D!==2||h.charCodeAt(h.length-1)!==46||h.charCodeAt(h.length-2)!==46){if(h.length>2){var Y=h.lastIndexOf("/");if(Y!==h.length-1){Y===-1?(h="",D=0):(h=h.slice(0,Y),D=h.length-1-h.lastIndexOf("/")),A=X,B=0;continue}}else if(h.length===2||h.length===1){h="",D=0,A=X,B=0;continue}}C&&(h.length>0?h+="/..":h="..",D=2)}else h.length>0?h+="/"+L.slice(A+1,X):h=L.slice(A+1,X),D=X-A-1;A=X,B=0}else H===46&&B!==-1?++B:B=-1}return h}i(j,"normalizeStringPosix");function K(L,C){var h=C.dir||C.root,D=C.base||(C.name||"")+(C.ext||"");return h?h===C.root?h+D:h+L+D:D}i(K,"_format");var V={resolve:i(function(){for(var C="",h=!1,D,A=arguments.length-1;A>=-1&&!h;A--){var B;A>=0?B=arguments[A]:(D===void 0&&(D=process.cwd()),B=D),k(B),B.length!==0&&(C=B+"/"+C,h=B.charCodeAt(0)===47)}return C=j(C,!h),h?C.length>0?"/"+C:"/":C.length>0?C:"."},"resolve"),normalize:i(function(C){if(k(C),C.length===0)return".";var h=C.charCodeAt(0)===47,D=C.charCodeAt(C.length-1)===47;return C=j(C,!h),C.length===0&&!h&&(C="."),C.length>0&&D&&(C+="/"),h?"/"+C:C},"normalize"),isAbsolute:i(function(C){return k(C),C.length>0&&C.charCodeAt(0)===47},"isAbsolute"),join:i(function(){if(arguments.length===0)return".";for(var C,h=0;h<arguments.length;++h){var D=arguments[h];k(D),D.length>0&&(C===void 0?C=D:C+="/"+D)}return C===void 0?".":V.normalize(C)},"join"),relative:i(function(C,h){if(k(C),k(h),C===h||(C=V.resolve(C),h=V.resolve(h),C===h))return"";for(var D=1;D<C.length&&C.charCodeAt(D)===47;++D);for(var A=C.length,B=A-D,H=1;H<h.length&&h.charCodeAt(H)===47;++H);for(var X=h.length,Y=X-H,Pe=B<Y?B:Y,Fe=-1,pe=0;pe<=Pe;++pe){if(pe===Pe){if(Y>Pe){if(h.charCodeAt(H+pe)===47)return h.slice(H+pe+1);if(pe===0)return h.slice(H+pe)}else B>Pe&&(C.charCodeAt(D+pe)===47?Fe=pe:pe===0&&(Fe=0));break}var Oe=C.charCodeAt(D+pe),it=h.charCodeAt(H+pe);if(Oe!==it)break;Oe===47&&(Fe=pe)}var U="";for(pe=D+Fe+1;pe<=A;++pe)(pe===A||C.charCodeAt(pe)===47)&&(U.length===0?U+="..":U+="/..");return U.length>0?U+h.slice(H+Fe):(H+=Fe,h.charCodeAt(H)===47&&++H,h.slice(H))},"relative"),_makeLong:i(function(C){return C},"_makeLong"),dirname:i(function(C){if(k(C),C.length===0)return".";for(var h=C.charCodeAt(0),D=h===47,A=-1,B=!0,H=C.length-1;H>=1;--H)if(h=C.charCodeAt(H),h===47){if(!B){A=H;break}}else B=!1;return A===-1?D?"/":".":D&&A===1?"//":C.slice(0,A)},"dirname"),basename:i(function(C,h){if(h!==void 0&&typeof h!="string")throw new TypeError('"ext" argument must be a string');k(C);var D=0,A=-1,B=!0,H;if(h!==void 0&&h.length>0&&h.length<=C.length){if(h.length===C.length&&h===C)return"";var X=h.length-1,Y=-1;for(H=C.length-1;H>=0;--H){var Pe=C.charCodeAt(H);if(Pe===47){if(!B){D=H+1;break}}else Y===-1&&(B=!1,Y=H+1),X>=0&&(Pe===h.charCodeAt(X)?--X===-1&&(A=H):(X=-1,A=Y))}return D===A?A=Y:A===-1&&(A=C.length),C.slice(D,A)}else{for(H=C.length-1;H>=0;--H)if(C.charCodeAt(H)===47){if(!B){D=H+1;break}}else A===-1&&(B=!1,A=H+1);return A===-1?"":C.slice(D,A)}},"basename"),extname:i(function(C){k(C);for(var h=-1,D=0,A=-1,B=!0,H=0,X=C.length-1;X>=0;--X){var Y=C.charCodeAt(X);if(Y===47){if(!B){D=X+1;break}continue}A===-1&&(B=!1,A=X+1),Y===46?h===-1?h=X:H!==1&&(H=1):h!==-1&&(H=-1)}return h===-1||A===-1||H===0||H===1&&h===A-1&&h===D+1?"":C.slice(h,A)},"extname"),format:i(function(C){if(C===null||typeof C!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof C);return K("/",C)},"format"),parse:i(function(C){k(C);var h={root:"",dir:"",base:"",ext:"",name:""};if(C.length===0)return h;var D=C.charCodeAt(0),A=D===47,B;A?(h.root="/",B=1):B=0;for(var H=-1,X=0,Y=-1,Pe=!0,Fe=C.length-1,pe=0;Fe>=B;--Fe){if(D=C.charCodeAt(Fe),D===47){if(!Pe){X=Fe+1;break}continue}Y===-1&&(Pe=!1,Y=Fe+1),D===46?H===-1?H=Fe:pe!==1&&(pe=1):H!==-1&&(pe=-1)}return H===-1||Y===-1||pe===0||pe===1&&H===Y-1&&H===X+1?Y!==-1&&(X===0&&A?h.base=h.name=C.slice(1,Y):h.base=h.name=C.slice(X,Y)):(X===0&&A?(h.name=C.slice(1,H),h.base=C.slice(1,Y)):(h.name=C.slice(X,H),h.base=C.slice(X,Y)),h.ext=C.slice(H,Y)),X>0?h.dir=C.slice(0,X-1):A&&(h.dir="/"),h},"parse"),sep:"/",delimiter:":",win32:null,posix:null};V.posix=V,_.exports=V},2551:(_,k,j)=>{"use strict";var K;/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V=j(6540),L=j(5228),C=j(9982);function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(i(h,"u"),!V)throw Error(h(227));function D(e,t,n,o,s,f,m,g,M){var S=Array.prototype.slice.call(arguments,3);try{t.apply(n,S)}catch(re){this.onError(re)}}i(D,"ba");var A=!1,B=null,H=!1,X=null,Y={onError:i(function(e){A=!0,B=e},"onError")};function Pe(e,t,n,o,s,f,m,g,M){A=!1,B=null,D.apply(Y,arguments)}i(Pe,"ja");function Fe(e,t,n,o,s,f,m,g,M){if(Pe.apply(this,arguments),A){if(A){var S=B;A=!1,B=null}else throw Error(h(198));H||(H=!0,X=S)}}i(Fe,"ka");var pe=null,Oe=null,it=null;function U(e,t,n){var o=e.type||"unknown-event";e.currentTarget=it(n),Fe(o,t,void 0,e),e.currentTarget=null}i(U,"oa");var R=null,l={};function ie(){if(R)for(var e in l){var t=l[e],n=R.indexOf(e);if(!(-1<n))throw Error(h(96,e));if(!Z[n]){if(!t.extractEvents)throw Error(h(97,e));Z[n]=t,n=t.eventTypes;for(var o in n){var s=void 0,f=n[o],m=t,g=o;if(O.hasOwnProperty(g))throw Error(h(99,g));O[g]=f;var M=f.phasedRegistrationNames;if(M){for(s in M)M.hasOwnProperty(s)&&I(M[s],m,g);s=!0}else f.registrationName?(I(f.registrationName,m,g),s=!0):s=!1;if(!s)throw Error(h(98,o,e))}}}}i(ie,"ra");function I(e,t,n){if($[e])throw Error(h(100,e));$[e]=t,oe[e]=t.eventTypes[n].dependencies}i(I,"ua");var Z=[],O={},$={},oe={};function J(e){var t=!1,n;for(n in e)if(e.hasOwnProperty(n)){var o=e[n];if(!l.hasOwnProperty(n)||l[n]!==o){if(l[n])throw Error(h(102,n));l[n]=o,t=!0}}t&&ie()}i(J,"xa");var ue=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),he=null,ce=null,Ce=null;function De(e){if(e=Oe(e)){if(typeof he!="function")throw Error(h(280));var t=e.stateNode;t&&(t=pe(t),he(e.stateNode,e.type,t))}}i(De,"Ca");function He(e){ce?Ce?Ce.push(e):Ce=[e]:ce=e}i(He,"Da");function Ge(){if(ce){var e=ce,t=Ce;if(Ce=ce=null,De(e),t)for(e=0;e<t.length;e++)De(t[e])}}i(Ge,"Ea");function Xe(e,t){return e(t)}i(Xe,"Fa");function pt(e,t,n,o,s){return e(t,n,o,s)}i(pt,"Ga");function ht(){}i(ht,"Ha");var Mt=Xe,Be=!1,z=!1;function ne(){(ce!==null||Ce!==null)&&(ht(),Ge())}i(ne,"La");function xe(e,t,n){if(z)return e(t,n);z=!0;try{return Mt(e,t,n)}finally{z=!1,ne()}}i(xe,"Ma");var w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P=Object.prototype.hasOwnProperty,ge={},_e={};function Me(e){return P.call(_e,e)?!0:P.call(ge,e)?!1:w.test(e)?_e[e]=!0:(ge[e]=!0,!1)}i(Me,"Ra");function Ze(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}i(Ze,"Sa");function gt(e,t,n,o){if(t===null||typeof t=="undefined"||Ze(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}i(gt,"Ta");function ke(e,t,n,o,s,f){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=f}i(ke,"v");var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new ke(e,0,!1,e,null,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$e[t]=new ke(t,1,!1,e[1],null,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new ke(e,2,!1,e.toLowerCase(),null,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new ke(e,2,!1,e,null,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new ke(e,3,!1,e.toLowerCase(),null,!1)}),["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new ke(e,3,!0,e,null,!1)}),["capture","download"].forEach(function(e){$e[e]=new ke(e,4,!1,e,null,!1)}),["cols","rows","size","span"].forEach(function(e){$e[e]=new ke(e,6,!1,e,null,!1)}),["rowSpan","start"].forEach(function(e){$e[e]=new ke(e,5,!1,e.toLowerCase(),null,!1)});var Rt=/[\-:]([a-z])/g;function yo(e){return e[1].toUpperCase()}i(yo,"Va"),"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Rt,yo);$e[t]=new ke(t,1,!1,e,null,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Rt,yo);$e[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Rt,yo);$e[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)}),["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new ke(e,1,!1,e.toLowerCase(),null,!1)}),$e.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach(function(e){$e[e]=new ke(e,1,!1,e.toLowerCase(),null,!0)});var $t=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;$t.hasOwnProperty("ReactCurrentDispatcher")||($t.ReactCurrentDispatcher={current:null}),$t.hasOwnProperty("ReactCurrentBatchConfig")||($t.ReactCurrentBatchConfig={suspense:null});function wo(e,t,n,o){var s=$e.hasOwnProperty(t)?$e[t]:null,f=s!==null?s.type===0:o?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");f||(gt(t,n,s,o)&&(n=null),o||s===null?Me(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,o=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}i(wo,"Xa");var Vl=/^(.*)[\\\/]/,wt=typeof Symbol=="function"&&Symbol.for,Kn=wt?Symbol.for("react.element"):60103,Yn=wt?Symbol.for("react.portal"):60106,dn=wt?Symbol.for("react.fragment"):60107,pi=wt?Symbol.for("react.strict_mode"):60108,Ar=wt?Symbol.for("react.profiler"):60114,hi=wt?Symbol.for("react.provider"):60109,gi=wt?Symbol.for("react.context"):60110,Ir=wt?Symbol.for("react.concurrent_mode"):60111,lt=wt?Symbol.for("react.forward_ref"):60112,Fr=wt?Symbol.for("react.suspense"):60113,vi=wt?Symbol.for("react.suspense_list"):60120,xo=wt?Symbol.for("react.memo"):60115,Gn=wt?Symbol.for("react.lazy"):60116,Ci=wt?Symbol.for("react.block"):60121,yi=typeof Symbol=="function"&&Symbol.iterator;function Xn(e){return e===null||typeof e!="object"?null:(e=yi&&e[yi]||e["@@iterator"],typeof e=="function"?e:null)}i(Xn,"nb");function Bl(e){if(e._status===-1){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}}i(Bl,"ob");function Zt(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dn:return"Fragment";case Yn:return"Portal";case Ar:return"Profiler";case pi:return"StrictMode";case Fr:return"Suspense";case vi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gi:return"Context.Consumer";case hi:return"Context.Provider";case lt:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case xo:return Zt(e.type);case Ci:return Zt(e.render);case Gn:if(e=e._status===1?e._result:null)return Zt(e)}return null}i(Zt,"pb");function Eo(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var o=e._debugOwner,s=e._debugSource,f=Zt(e.type);n=null,o&&(n=Zt(o.type)),o=f,f="",s?f=" (at "+s.fileName.replace(Vl,"")+":"+s.lineNumber+")":n&&(f=" (created by "+n+")"),n=`
    in `+(o||"Unknown")+f}t+=n,e=e.return}while(e);return t}i(Eo,"qb");function qt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}i(qt,"rb");function wi(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}i(wi,"sb");function wa(e){var t=wi(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,f=n.set;return Object.defineProperty(e,t,{configurable:!0,get:i(function(){return s.call(this)},"get"),set:i(function(m){o=""+m,f.call(this,m)},"set")}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:i(function(){return o},"getValue"),setValue:i(function(m){o=""+m},"setValue"),stopTracking:i(function(){e._valueTracker=null,delete e[t]},"stopTracking")}}}i(wa,"tb");function Jn(e){e._valueTracker||(e._valueTracker=wa(e))}i(Jn,"xb");function zl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=wi(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}i(zl,"yb");function Hr(e,t){var n=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}i(Hr,"zb");function xi(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}i(xi,"Ab");function Ei(e,t){t=t.checked,t!=null&&wo(e,"checked",t,!1)}i(Ei,"Bb");function Je(e,t){Ei(e,t);var n=qt(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bi(e,t.type,n):t.hasOwnProperty("defaultValue")&&bi(e,t.type,qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}i(Je,"Cb");function jl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}i(jl,"Eb");function bi(e,t,n){(t!=="number"||e.ownerDocument.activeElement!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}i(bi,"Db");function xa(e){var t="";return V.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}i(xa,"Fb");function ki(e,t){return e=L({children:void 0},t),(t=xa(t.children))&&(e.children=t),e}i(ki,"Gb");function Sn(e,t,n,o){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&o&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}i(Sn,"Hb");function _i(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}i(_i,"Ib");function bo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qt(n)}}i(bo,"Jb");function $r(e,t){var n=qt(t.value),o=qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}i($r,"Kb");function Mi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}i(Mi,"Lb");var Si={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Ul(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}i(Ul,"Nb");function Li(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ul(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}i(Li,"Ob");var ko,er=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,o,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,s)})}:e}(function(e,t){if(e.namespaceURI!==Si.svg||"innerHTML"in e)e.innerHTML=t;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ko.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}i(Vt,"Rb");function tr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}i(tr,"Sb");var fn={animationend:tr("Animation","AnimationEnd"),animationiteration:tr("Animation","AnimationIteration"),animationstart:tr("Animation","AnimationStart"),transitionend:tr("Transition","TransitionEnd")},_o={},Mo={};ue&&(Mo=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function Vr(e){if(_o[e])return _o[e];if(!fn[e])return e;var t=fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mo)return _o[e]=t[n];return e}i(Vr,"Wb");var Ti=Vr("animationend"),So=Vr("animationiteration"),Br=Vr("animationstart"),Lo=Vr("transitionend"),mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),To=new(typeof WeakMap=="function"?WeakMap:Map);function zr(e){var t=To.get(e);return t===void 0&&(t=new Map,To.set(e,t)),t}i(zr,"cc");function Qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.effectTag&1026&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}i(Qt,"dc");function jr(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}i(jr,"ec");function nr(e){if(Qt(e)!==e)throw Error(h(188))}i(nr,"fc");function Wl(e){var t=e.alternate;if(!t){if(t=Qt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,o=t;;){var s=n.return;if(s===null)break;var f=s.alternate;if(f===null){if(o=s.return,o!==null){n=o;continue}break}if(s.child===f.child){for(f=s.child;f;){if(f===n)return nr(s),e;if(f===o)return nr(s),t;f=f.sibling}throw Error(h(188))}if(n.return!==o.return)n=s,o=f;else{for(var m=!1,g=s.child;g;){if(g===n){m=!0,n=s,o=f;break}if(g===o){m=!0,o=s,n=f;break}g=g.sibling}if(!m){for(g=f.child;g;){if(g===n){m=!0,n=f,o=s;break}if(g===o){m=!0,o=f,n=s;break}g=g.sibling}if(!m)throw Error(h(189))}}if(n.alternate!==o)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}i(Wl,"gc");function Ur(e){if(e=Wl(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}i(Ur,"hc");function rr(e,t){if(t==null)throw Error(h(30));return e==null?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}i(rr,"ic");function en(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}i(en,"jc");var Ln=null;function Ea(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var o=0;o<t.length&&!e.isPropagationStopped();o++)U(e,t[o],n[o]);else t&&U(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}i(Ea,"lc");function No(e){if(e!==null&&(Ln=rr(Ln,e)),e=Ln,Ln=null,e){if(en(e,Ea),Ln)throw Error(h(95));if(H)throw e=X,H=!1,X=null,e}}i(No,"mc");function Ni(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}i(Ni,"nc");function Zl(e){if(!ue)return!1;e="on"+e;var t=e in document;return t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t=typeof t[e]=="function"),t}i(Zl,"oc");var Ro=[];function Pt(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>Ro.length&&Ro.push(e)}i(Pt,"qc");function ql(e,t,n,o){if(Ro.length){var s=Ro.pop();return s.topLevelType=e,s.eventSystemFlags=o,s.nativeEvent=t,s.targetInst=n,s}return{topLevelType:e,eventSystemFlags:o,nativeEvent:t,targetInst:n,ancestors:[]}}i(ql,"rc");function Ri(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var o=n;if(o.tag===3)o=o.stateNode.containerInfo;else{for(;o.return;)o=o.return;o=o.tag!==3?null:o.stateNode.containerInfo}if(!o)break;t=n.tag,t!==5&&t!==6||e.ancestors.push(n),n=mr(o)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var s=Ni(e.nativeEvent);o=e.topLevelType;var f=e.nativeEvent,m=e.eventSystemFlags;n===0&&(m|=64);for(var g=null,M=0;M<Z.length;M++){var S=Z[M];S&&(S=S.extractEvents(o,t,f,s,m))&&(g=rr(g,S))}No(g)}}i(Ri,"sc");function Po(e,t,n){if(!n.has(e)){switch(e){case"scroll":Tn(t,"scroll",!0);break;case"focus":case"blur":Tn(t,"focus",!0),Tn(t,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":Zl(e)&&Tn(t,e,!0);break;case"invalid":case"submit":case"reset":break;default:mn.indexOf(e)===-1&&Ye(e,t)}n.set(e,null)}}i(Po,"uc");var xt,vt,pn,Wr=!1,Kt=[],Yt=null,Bt=null,zt=null,Zr=new Map,or=new Map,tt=[],qr="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),St="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function Ct(e,t){var n=zr(t);qr.forEach(function(o){Po(o,t,n)}),St.forEach(function(o){Po(o,t,n)})}i(Ct,"Jc");function je(e,t,n,o,s){return{blockedOn:e,topLevelType:t,eventSystemFlags:n|32,nativeEvent:s,container:o}}i(je,"Kc");function qe(e,t){switch(e){case"focus":case"blur":Yt=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":or.delete(t.pointerId)}}i(qe,"Lc");function ir(e,t,n,o,s,f){return e===null||e.nativeEvent!==f?(e=je(t,n,o,s,f),t!==null&&(t=nn(t),t!==null&&vt(t)),e):(e.eventSystemFlags|=o,e)}i(ir,"Mc");function Pi(e,t,n,o,s){switch(t){case"focus":return Yt=ir(Yt,e,t,n,o,s),!0;case"dragenter":return Bt=ir(Bt,e,t,n,o,s),!0;case"mouseover":return zt=ir(zt,e,t,n,o,s),!0;case"pointerover":var f=s.pointerId;return Zr.set(f,ir(Zr.get(f)||null,e,t,n,o,s)),!0;case"gotpointercapture":return f=s.pointerId,or.set(f,ir(or.get(f)||null,e,t,n,o,s)),!0}return!1}i(Pi,"Oc");function Ql(e){var t=mr(e.target);if(t!==null){var n=Qt(t);if(n!==null){if(t=n.tag,t===13){if(t=jr(n),t!==null){e.blockedOn=t,C.unstable_runWithPriority(e.priority,function(){pn(n)});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}i(Ql,"Pc");function Qr(e){if(e.blockedOn!==null)return!1;var t=Nn(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(t!==null){var n=nn(t);return n!==null&&vt(n),e.blockedOn=t,!1}return!0}i(Qr,"Qc");function Kr(e,t,n){Qr(e)&&n.delete(t)}i(Kr,"Sc");function lr(){for(Wr=!1;0<Kt.length;){var e=Kt[0];if(e.blockedOn!==null){e=nn(e.blockedOn),e!==null&&xt(e);break}var t=Nn(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);t!==null?e.blockedOn=t:Kt.shift()}Yt!==null&&Qr(Yt)&&(Yt=null),Bt!==null&&Qr(Bt)&&(Bt=null),zt!==null&&Qr(zt)&&(zt=null),Zr.forEach(Kr),or.forEach(Kr)}i(lr,"Tc");function hn(e,t){e.blockedOn===t&&(e.blockedOn=null,Wr||(Wr=!0,C.unstable_scheduleCallback(C.unstable_NormalPriority,lr)))}i(hn,"Uc");function Oi(e){function t(s){return hn(s,e)}if(i(t,"b"),0<Kt.length){hn(Kt[0],e);for(var n=1;n<Kt.length;n++){var o=Kt[n];o.blockedOn===e&&(o.blockedOn=null)}}for(Yt!==null&&hn(Yt,e),Bt!==null&&hn(Bt,e),zt!==null&&hn(zt,e),Zr.forEach(t),or.forEach(t),n=0;n<tt.length;n++)o=tt[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)Ql(n),n.blockedOn===null&&tt.shift()}i(Oi,"Vc");var Yr={},Di=new Map,Oo=new Map,Kl=["abort","abort",Ti,"animationEnd",So,"animationIteration",Br,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lo,"transitionEnd","waiting","waiting"];function Do(e,t){for(var n=0;n<e.length;n+=2){var o=e[n],s=e[n+1],f="on"+(s[0].toUpperCase()+s.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[o],eventPriority:t},Oo.set(o,t),Di.set(o,f),Yr[s]=f}}i(Do,"ad"),Do("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Do("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Do(Kl,2);for(var ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),sr=0;sr<ve.length;sr++)Oo.set(ve[sr],0);var Yl=C.unstable_UserBlockingPriority,ba=C.unstable_runWithPriority,Ae=!0;function Ye(e,t){Tn(t,e,!1)}i(Ye,"F");function Tn(e,t,n){var o=Oo.get(t);switch(o===void 0?2:o){case 0:o=Ao.bind(null,t,1,e);break;case 1:o=Gl.bind(null,t,1,e);break;default:o=gn.bind(null,t,1,e)}n?e.addEventListener(t,o,!0):e.addEventListener(t,o,!1)}i(Tn,"vc");function Ao(e,t,n,o){Be||ht();var s=gn,f=Be;Be=!0;try{pt(s,e,t,n,o)}finally{(Be=f)||ne()}}i(Ao,"gd");function Gl(e,t,n,o){ba(Yl,gn.bind(null,e,t,n,o))}i(Gl,"hd");function gn(e,t,n,o){if(Ae)if(0<Kt.length&&-1<qr.indexOf(e))e=je(null,e,t,n,o),Kt.push(e);else{var s=Nn(e,t,n,o);if(s===null)qe(e,o);else if(-1<qr.indexOf(e))e=je(s,e,t,n,o),Kt.push(e);else if(!Pi(s,e,t,n,o)){qe(e,o),e=ql(e,o,null,t);try{xe(Ri,e)}finally{Pt(e)}}}}i(gn,"id");function Nn(e,t,n,o){if(n=Ni(o),n=mr(n),n!==null){var s=Qt(n);if(s===null)n=null;else{var f=s.tag;if(f===13){if(n=jr(s),n!==null)return n;n=null}else if(f===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null)}}e=ql(e,o,n,t);try{xe(Ri,e)}finally{Pt(e)}return null}i(Nn,"Rc");var ar={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xl=["Webkit","ms","Moz","O"];Object.keys(ar).forEach(function(e){Xl.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ar[t]=ar[e]})});function Ai(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ar.hasOwnProperty(e)&&ar[e]?(""+t).trim():t+"px"}i(Ai,"ld");function Io(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,s=Ai(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,s):e[n]=s}}i(Io,"md");var Jl=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(e,t){if(t){if(Jl[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e,""));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62,""))}}i(Fo,"od");function Ho(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}i(Ho,"pd");var Ii=Si.html;function jt(e,t){e=e.nodeType===9||e.nodeType===11?e:e.ownerDocument;var n=zr(e);t=oe[t];for(var o=0;o<t.length;o++)Po(t[o],e,n)}i(jt,"rd");function ur(){}i(ur,"sd");function cr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}i(cr,"td");function $o(e){for(;e&&e.firstChild;)e=e.firstChild;return e}i($o,"ud");function es(e,t){var n=$o(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$o(n)}}i(es,"vd");function Vo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}i(Vo,"wd");function Fi(){for(var e=window,t=cr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=cr(e.document)}return t}i(Fi,"xd");function Hi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}i(Hi,"yd");var $i="$",ts="/$",Bo="$?",vn="$!",dr=null,zo=null;function Vi(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}i(Vi,"Fd");function jo(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}i(jo,"Gd");var Uo=typeof setTimeout=="function"?setTimeout:void 0,ns=typeof clearTimeout=="function"?clearTimeout:void 0;function Rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}i(Rn,"Jd");function Bi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===$i||n===vn||n===Bo){if(t===0)return e;t--}else n===ts&&t++}e=e.previousSibling}return null}i(Bi,"Kd");var Wo=Math.random().toString(36).slice(2),tn="__reactInternalInstance$"+Wo,Gr="__reactEventHandlers$"+Wo,fr="__reactContainere$"+Wo;function mr(e){var t=e[tn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fr]||n[tn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bi(e);e!==null;){if(n=e[tn])return n;e=Bi(e)}return t}e=n,n=e.parentNode}return null}i(mr,"tc");function nn(e){return e=e[tn]||e[fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}i(nn,"Nc");function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}i(Cn,"Pd");function Zo(e){return e[Gr]||null}i(Zo,"Qd");function Gt(e){do e=e.return;while(e&&e.tag!==5);return e||null}i(Gt,"Rd");function zi(e,t){var n=e.stateNode;if(!n)return null;var o=pe(n);if(!o)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}i(zi,"Sd");function ji(e,t,n){(t=zi(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=rr(n._dispatchListeners,t),n._dispatchInstances=rr(n._dispatchInstances,e))}i(ji,"Td");function st(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=Gt(t);for(t=n.length;0<t--;)ji(n[t],"captured",e);for(t=0;t<n.length;t++)ji(n[t],"bubbled",e)}}i(st,"Ud");function pr(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=zi(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=rr(n._dispatchListeners,t),n._dispatchInstances=rr(n._dispatchInstances,e))}i(pr,"Vd");function rs(e){e&&e.dispatchConfig.registrationName&&pr(e._targetInst,null,e)}i(rs,"Wd");function Pn(e){en(e,st)}i(Pn,"Xd");var rn=null,qo=null,Xr=null;function Ui(){if(Xr)return Xr;var e,t=qo,n=t.length,o,s="value"in rn?rn.value:rn.textContent,f=s.length;for(e=0;e<n&&t[e]===s[e];e++);var m=n-e;for(o=1;o<=m&&t[n-o]===s[f-o];o++);return Xr=s.slice(e,1<o?1-o:void 0)}i(Ui,"ae");function Jr(){return!0}i(Jr,"be");function hr(){return!1}i(hr,"ce");function Lt(e,t,n,o){this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface;for(var s in e)e.hasOwnProperty(s)&&((t=e[s])?this[s]=t(n):s==="target"?this.target=o:this[s]=n[s]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Jr:hr,this.isPropagationStopped=hr,this}i(Lt,"G"),L(Lt.prototype,{preventDefault:i(function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Jr)},"preventDefault"),stopPropagation:i(function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Jr)},"stopPropagation"),persist:i(function(){this.isPersistent=Jr},"persist"),isPersistent:hr,destructor:i(function(){var e=this.constructor.Interface,t;for(t in e)this[t]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=hr,this._dispatchInstances=this._dispatchListeners=null},"destructor")}),Lt.Interface={type:null,target:null,currentTarget:i(function(){return null},"currentTarget"),eventPhase:null,bubbles:null,cancelable:null,timeStamp:i(function(e){return e.timeStamp||Date.now()},"timeStamp"),defaultPrevented:null,isTrusted:null},Lt.extend=function(e){function t(){}i(t,"b");function n(){return o.apply(this,arguments)}i(n,"c");var o=this;t.prototype=o.prototype;var s=new t;return L(s,n.prototype),n.prototype=s,n.prototype.constructor=n,n.Interface=L({},o.Interface,e),n.extend=o.extend,Wi(n),n},Wi(Lt);function os(e,t,n,o){if(this.eventPool.length){var s=this.eventPool.pop();return this.call(s,e,t,n,o),s}return new this(e,t,n,o)}i(os,"ee");function is(e){if(!(e instanceof this))throw Error(h(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}i(is,"fe");function Wi(e){e.eventPool=[],e.getPooled=os,e.release=is}i(Wi,"de");var ls=Lt.extend({data:null}),ss=Lt.extend({data:null}),as=[9,13,27,32],Qo=ue&&"CompositionEvent"in window,eo=null;ue&&"documentMode"in document&&(eo=document.documentMode);var us=ue&&"TextEvent"in window&&!eo,Zi=ue&&(!Qo||eo&&8<eo&&11>=eo),qi=" ",Xt={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Qi=!1;function cs(e,t){switch(e){case"keyup":return as.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}i(cs,"qe");function Ki(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}i(Ki,"re");var On=!1;function ds(e,t){switch(e){case"compositionend":return Ki(t);case"keypress":return t.which!==32?null:(Qi=!0,qi);case"textInput":return e=t.data,e===qi&&Qi?null:e;default:return null}}i(ds,"te");function fs(e,t){if(On)return e==="compositionend"||!Qo&&cs(e,t)?(e=Ui(),Xr=qo=rn=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zi&&t.locale!=="ko"?null:t.data;default:return null}}i(fs,"ue");var ms={eventTypes:Xt,extractEvents:i(function(e,t,n,o){var s;if(Qo)e:{switch(e){case"compositionstart":var f=Xt.compositionStart;break e;case"compositionend":f=Xt.compositionEnd;break e;case"compositionupdate":f=Xt.compositionUpdate;break e}f=void 0}else On?cs(e,n)&&(f=Xt.compositionEnd):e==="keydown"&&n.keyCode===229&&(f=Xt.compositionStart);return f?(Zi&&n.locale!=="ko"&&(On||f!==Xt.compositionStart?f===Xt.compositionEnd&&On&&(s=Ui()):(rn=o,qo="value"in rn?rn.value:rn.textContent,On=!0)),f=ls.getPooled(f,t,n,o),s?f.data=s:(s=Ki(n),s!==null&&(f.data=s)),Pn(f),s=f):s=null,(e=us?ds(e,n):fs(e,n))?(t=ss.getPooled(Xt.beforeInput,t,n,o),t.data=e,Pn(t)):t=null,s===null?t:t===null?s:[s,t]},"extractEvents")},to={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ko(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!to[e.type]:t==="textarea"}i(Ko,"xe");var Yi={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Gi(e,t,n){return e=Lt.getPooled(Yi.change,e,t,n),e.type="change",He(n),Pn(e),e}i(Gi,"ze");var Dn=null,gr=null;function ps(e){No(e)}i(ps,"Ce");function no(e){var t=Cn(e);if(zl(t))return e}i(no,"De");function ka(e,t){if(e==="change")return t}i(ka,"Ee");var yn=!1;ue&&(yn=Zl("input")&&(!document.documentMode||9<document.documentMode));function Yo(){Dn&&(Dn.detachEvent("onpropertychange",Xi),gr=Dn=null)}i(Yo,"Ge");function Xi(e){if(e.propertyName==="value"&&no(gr))if(e=Gi(gr,e,Ni(e)),Be)No(e);else{Be=!0;try{Xe(ps,e)}finally{Be=!1,ne()}}}i(Xi,"He");function hs(e,t,n){e==="focus"?(Yo(),Dn=t,gr=n,Dn.attachEvent("onpropertychange",Xi)):e==="blur"&&Yo()}i(hs,"Ie");function gs(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return no(gr)}i(gs,"Je");function vs(e,t){if(e==="click")return no(t)}i(vs,"Ke");function Cs(e,t){if(e==="input"||e==="change")return no(t)}i(Cs,"Le");var Ji={eventTypes:Yi,_isInputEventSupported:yn,extractEvents:i(function(e,t,n,o){var s=t?Cn(t):window,f=s.nodeName&&s.nodeName.toLowerCase();if(f==="select"||f==="input"&&s.type==="file")var m=ka;else if(Ko(s))if(yn)m=Cs;else{m=gs;var g=hs}else(f=s.nodeName)&&f.toLowerCase()==="input"&&(s.type==="checkbox"||s.type==="radio")&&(m=vs);if(m&&(m=m(e,t)))return Gi(m,n,o);g&&g(e,s,t),e==="blur"&&(e=s._wrapperState)&&e.controlled&&s.type==="number"&&bi(s,"number",s.value)},"extractEvents")},An=Lt.extend({view:null,detail:null}),ys={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ws(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ys[e])?!!t[e]:!1}i(ws,"Pe");function Go(){return ws}i(Go,"Qe");var Xo=0,vr=0,el=!1,ro=!1,In=An.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Go,button:null,buttons:null,relatedTarget:i(function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},"relatedTarget"),movementX:i(function(e){if("movementX"in e)return e.movementX;var t=Xo;return Xo=e.screenX,el?e.type==="mousemove"?e.screenX-t:0:(el=!0,0)},"movementX"),movementY:i(function(e){if("movementY"in e)return e.movementY;var t=vr;return vr=e.screenY,ro?e.type==="mousemove"?e.screenY-t:0:(ro=!0,0)},"movementY")}),tl=In.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Cr={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},nl={eventTypes:Cr,extractEvents:i(function(e,t,n,o,s){var f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout";if(f&&!(s&32)&&(n.relatedTarget||n.fromElement)||!m&&!f)return null;if(f=o.window===o?o:(f=o.ownerDocument)?f.defaultView||f.parentWindow:window,m){if(m=t,t=(t=n.relatedTarget||n.toElement)?mr(t):null,t!==null){var g=Qt(t);(t!==g||t.tag!==5&&t.tag!==6)&&(t=null)}}else m=null;if(m===t)return null;if(e==="mouseout"||e==="mouseover")var M=In,S=Cr.mouseLeave,re=Cr.mouseEnter,se="mouse";else(e==="pointerout"||e==="pointerover")&&(M=tl,S=Cr.pointerLeave,re=Cr.pointerEnter,se="pointer");if(e=m==null?f:Cn(m),f=t==null?f:Cn(t),S=M.getPooled(S,m,n,o),S.type=se+"leave",S.target=e,S.relatedTarget=f,n=M.getPooled(re,t,n,o),n.type=se+"enter",n.target=f,n.relatedTarget=e,o=m,se=t,o&&se)e:{for(M=o,re=se,m=0,e=M;e;e=Gt(e))m++;for(e=0,t=re;t;t=Gt(t))e++;for(;0<m-e;)M=Gt(M),m--;for(;0<e-m;)re=Gt(re),e--;for(;m--;){if(M===re||M===re.alternate)break e;M=Gt(M),re=Gt(re)}M=null}else M=null;for(re=M,M=[];o&&o!==re&&(m=o.alternate,!(m!==null&&m===re));)M.push(o),o=Gt(o);for(o=[];se&&se!==re&&(m=se.alternate,!(m!==null&&m===re));)o.push(se),se=Gt(se);for(se=0;se<M.length;se++)pr(M[se],"bubbled",S);for(se=o.length;0<se--;)pr(o[se],"captured",n);return s&64?[S,n]:[S]},"extractEvents")};function xs(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}i(xs,"Ze");var Fn=typeof Object.is=="function"?Object.is:xs,_a=Object.prototype.hasOwnProperty;function yr(e,t){if(Fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++)if(!_a.call(t,n[o])||!Fn(e[n[o]],t[n[o]]))return!1;return!0}i(yr,"bf");var Ma=ue&&"documentMode"in document&&11>=document.documentMode,rl={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Hn=null,Jo=null,wr=null,oo=!1;function ol(e,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;return oo||Hn==null||Hn!==cr(n)?null:(n=Hn,"selectionStart"in n&&Hi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),wr&&yr(wr,n)?null:(wr=n,e=Lt.getPooled(rl.select,Jo,e,t),e.type="select",e.target=Hn,Pn(e),e))}i(ol,"jf");var il={eventTypes:rl,extractEvents:i(function(e,t,n,o,s,f){if(s=f||(o.window===o?o.document:o.nodeType===9?o:o.ownerDocument),!(f=!s)){e:{s=zr(s),f=oe.onSelect;for(var m=0;m<f.length;m++)if(!s.has(f[m])){s=!1;break e}s=!0}f=!s}if(f)return null;switch(s=t?Cn(t):window,e){case"focus":(Ko(s)||s.contentEditable==="true")&&(Hn=s,Jo=t,wr=null);break;case"blur":wr=Jo=Hn=null;break;case"mousedown":oo=!0;break;case"contextmenu":case"mouseup":case"dragend":return oo=!1,ol(n,o);case"selectionchange":if(Ma)break;case"keydown":case"keyup":return ol(n,o)}return null},"extractEvents")},Es=Lt.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Sa=Lt.extend({clipboardData:i(function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData},"clipboardData")}),bs=An.extend({relatedTarget:null});function io(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}i(io,"of");var ks={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_s={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ms=An.extend({key:i(function(e){if(e.key){var t=ks[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_s[e.keyCode]||"Unidentified":""},"key"),location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Go,charCode:i(function(e){return e.type==="keypress"?io(e):0},"charCode"),keyCode:i(function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},"keyCode"),which:i(function(e){return e.type==="keypress"?io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0},"which")}),Ss=In.extend({dataTransfer:null}),Ls=An.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Go}),Ts=Lt.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Ns=In.extend({deltaX:i(function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},"deltaX"),deltaY:i(function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},"deltaY"),deltaZ:null,deltaMode:null}),Rs={eventTypes:Yr,extractEvents:i(function(e,t,n,o){var s=Di.get(e);if(!s)return null;switch(e){case"keypress":if(io(n)===0)return null;case"keydown":case"keyup":e=Ms;break;case"blur":case"focus":e=bs;break;case"click":if(n.button===2)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=In;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=Ss;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=Ls;break;case Ti:case So:case Br:e=Es;break;case Lo:e=Ts;break;case"scroll":e=An;break;case"wheel":e=Ns;break;case"copy":case"cut":case"paste":e=Sa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=tl;break;default:e=Lt}return t=e.getPooled(s,t,n,o),Pn(t),t},"extractEvents")};if(R)throw Error(h(101));R=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),ie();var Ps=nn;pe=Zo,Oe=Ps,it=Cn,J({SimpleEventPlugin:Rs,EnterLeaveEventPlugin:nl,ChangeEventPlugin:Ji,SelectEventPlugin:il,BeforeInputEventPlugin:ms});var ei=[],wn=-1;function Qe(e){0>wn||(e.current=ei[wn],ei[wn]=null,wn--)}i(Qe,"H");function nt(e,t){wn++,ei[wn]=e.current,e.current=t}i(nt,"I");var on={},ut={current:on},Et={current:!1},xn=on;function $n(e,t){var n=e.type.contextTypes;if(!n)return on;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var s={},f;for(f in n)s[f]=t[f];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}i($n,"Cf");function bt(e){return e=e.childContextTypes,e!=null}i(bt,"L");function xr(){Qe(Et),Qe(ut)}i(xr,"Df");function ll(e,t,n){if(ut.current!==on)throw Error(h(168));nt(ut,t),nt(Et,n)}i(ll,"Ef");function sl(e,t,n){var o=e.stateNode;if(e=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var s in o)if(!(s in e))throw Error(h(108,Zt(t)||"Unknown",s));return L({},n,{},o)}i(sl,"Ff");function Vn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,xn=ut.current,nt(ut,e),nt(Et,Et.current),!0}i(Vn,"Gf");function lo(e,t,n){var o=e.stateNode;if(!o)throw Error(h(169));n?(e=sl(e,t,xn),o.__reactInternalMemoizedMergedChildContext=e,Qe(Et),Qe(ut),nt(ut,e)):Qe(Et),nt(Et,n)}i(lo,"Hf");var ti=C.unstable_runWithPriority,Er=C.unstable_scheduleCallback,so=C.unstable_cancelCallback,ao=C.unstable_requestPaint,br=C.unstable_now,En=C.unstable_getCurrentPriorityLevel,Bn=C.unstable_ImmediatePriority,bn=C.unstable_UserBlockingPriority,uo=C.unstable_NormalPriority,co=C.unstable_LowPriority,fo=C.unstable_IdlePriority,mo={},r=C.unstable_shouldYield,a=ao!==void 0?ao:function(){},u=null,d=null,c=!1,p=br(),v=1e4>p?br:function(){return br()-p};function y(){switch(En()){case Bn:return 99;case bn:return 98;case uo:return 97;case co:return 96;case fo:return 95;default:throw Error(h(332))}}i(y,"ag");function x(e){switch(e){case 99:return Bn;case 98:return bn;case 97:return uo;case 96:return co;case 95:return fo;default:throw Error(h(332))}}i(x,"bg");function T(e,t){return e=x(e),ti(e,t)}i(T,"cg");function q(e,t,n){return e=x(e),Er(e,t,n)}i(q,"dg");function F(e){return u===null?(u=[e],d=Er(Bn,fe)):u.push(e),mo}i(F,"eg");function G(){if(d!==null){var e=d;d=null,so(e)}fe()}i(G,"gg");function fe(){if(!c&&u!==null){c=!0;var e=0;try{var t=u;T(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),u=null}catch(n){throw u!==null&&(u=u.slice(e+1)),Er(Bn,G),n}finally{c=!1}}}i(fe,"fg");function Q(e,t,n){return n/=10,1073741821-(((1073741821-e+t/10)/n|0)+1)*n}i(Q,"hg");function de(e,t){if(e&&e.defaultProps){t=L({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}i(de,"ig");var le={current:null},Se=null,be=null,Te=null;function Le(){Te=be=Se=null}i(Le,"ng");function et(e){var t=le.current;Qe(le),e.type._context._currentValue=t}i(et,"og");function we(e,t){for(;e!==null;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t);else if(n!==null&&n.childExpirationTime<t)n.childExpirationTime=t;else break;e=e.return}}i(we,"pg");function Ue(e,t){Se=e,Te=be=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.expirationTime>=t&&(sn=!0),e.firstContext=null)}i(Ue,"qg");function Ke(e,t){if(Te!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(Te=e,t=1073741823),t={context:e,observedBits:t,next:null},be===null){if(Se===null)throw Error(h(308));be=t,Se.dependencies={expirationTime:0,firstContext:t,responders:null}}else be=be.next=t;return e._currentValue}i(Ke,"sg");var Tt=!1;function ct(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}i(ct,"ug");function dt(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}i(dt,"vg");function Nt(e,t){return e={expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null},e.next=e}i(Nt,"wg");function ze(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}i(ze,"xg");function Dt(e,t){var n=e.alternate;n!==null&&dt(n,e),e=e.updateQueue,n=e.baseQueue,n===null?(e.baseQueue=t.next=t,t.next=t):(t.next=n.next,n.next=t)}i(Dt,"yg");function zn(e,t,n,o){var s=e.updateQueue;Tt=!1;var f=s.baseQueue,m=s.shared.pending;if(m!==null){if(f!==null){var g=f.next;f.next=m.next,m.next=g}f=m,s.shared.pending=null,g=e.alternate,g!==null&&(g=g.updateQueue,g!==null&&(g.baseQueue=m))}if(f!==null){g=f.next;var M=s.baseState,S=0,re=null,se=null,Ie=null;if(g!==null){var We=g;do{if(m=We.expirationTime,m<o){var Wt={expirationTime:We.expirationTime,suspenseConfig:We.suspenseConfig,tag:We.tag,payload:We.payload,callback:We.callback,next:null};Ie===null?(se=Ie=Wt,re=M):Ie=Ie.next=Wt,m>S&&(S=m)}else{Ie!==null&&(Ie=Ie.next={expirationTime:1073741823,suspenseConfig:We.suspenseConfig,tag:We.tag,payload:We.payload,callback:We.callback,next:null}),Eu(m,We.suspenseConfig);e:{var yt=e,b=We;switch(m=t,Wt=n,b.tag){case 1:if(yt=b.payload,typeof yt=="function"){M=yt.call(Wt,M,m);break e}M=yt;break e;case 3:yt.effectTag=yt.effectTag&-4097|64;case 0:if(yt=b.payload,m=typeof yt=="function"?yt.call(Wt,M,m):yt,m==null)break e;M=L({},M,m);break e;case 2:Tt=!0}}We.callback!==null&&(e.effectTag|=32,m=s.effects,m===null?s.effects=[We]:m.push(We))}if(We=We.next,We===null||We===g){if(m=s.shared.pending,m===null)break;We=f.next=m.next,m.next=g,s.baseQueue=f=m,s.shared.pending=null}}while(!0)}Ie===null?re=M:Ie.next=se,s.baseState=re,s.baseQueue=Ie,Al(S),e.expirationTime=S,e.memoizedState=M}}i(zn,"zg");function al(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],s=o.callback;if(s!==null){if(o.callback=null,o=s,s=n,typeof o!="function")throw Error(h(191,o));o.call(s)}}}i(al,"Cg");var ni=$t.ReactCurrentBatchConfig,La=new V.Component().refs;function ul(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:L({},t,n),e.memoizedState=n,e.expirationTime===0&&(e.updateQueue.baseState=n)}i(ul,"Fg");var cl={isMounted:i(function(e){return(e=e._reactInternalFiber)?Qt(e)===e:!1},"isMounted"),enqueueSetState:i(function(e,t,n){e=e._reactInternalFiber;var o=un(),s=ni.suspense;o=Tr(o,e,s),s=Nt(o,s),s.payload=t,n!=null&&(s.callback=n),ze(e,s),Zn(e,o)},"enqueueSetState"),enqueueReplaceState:i(function(e,t,n){e=e._reactInternalFiber;var o=un(),s=ni.suspense;o=Tr(o,e,s),s=Nt(o,s),s.tag=1,s.payload=t,n!=null&&(s.callback=n),ze(e,s),Zn(e,o)},"enqueueReplaceState"),enqueueForceUpdate:i(function(e,t){e=e._reactInternalFiber;var n=un(),o=ni.suspense;n=Tr(n,e,o),o=Nt(n,o),o.tag=2,t!=null&&(o.callback=t),ze(e,o),Zn(e,n)},"enqueueForceUpdate")};function Ta(e,t,n,o,s,f,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,m):t.prototype&&t.prototype.isPureReactComponent?!yr(n,o)||!yr(s,f):!0}i(Ta,"Kg");function Na(e,t,n){var o=!1,s=on,f=t.contextType;return typeof f=="object"&&f!==null?f=Ke(f):(s=bt(t)?xn:ut.current,o=t.contextTypes,f=(o=o!=null)?$n(e,s):on),t=new t(n,f),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternalFiber=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=f),t}i(Na,"Lg");function Ra(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}i(Ra,"Mg");function Os(e,t,n,o){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs=La,ct(e);var f=t.contextType;typeof f=="object"&&f!==null?s.context=Ke(f):(f=bt(t)?xn:ut.current,s.context=$n(e,f)),zn(e,n,s,o),s.state=e.memoizedState,f=t.getDerivedStateFromProps,typeof f=="function"&&(ul(e,t,f,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&cl.enqueueReplaceState(s,s.state,null),zn(e,n,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.effectTag|=4)}i(Os,"Ng");var dl=Array.isArray;function ri(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var o=n.stateNode}if(!o)throw Error(h(147,e));var s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=i(function(f){var m=o.refs;m===La&&(m=o.refs={}),f===null?delete m[s]:m[s]=f},"b"),t._stringRef=s,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}i(ri,"Pg");function fl(e,t){if(e.type!=="textarea")throw Error(h(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t,""))}i(fl,"Qg");function Pa(e){function t(b,E){if(e){var N=b.lastEffect;N!==null?(N.nextEffect=E,b.lastEffect=E):b.firstEffect=b.lastEffect=E,E.nextEffect=null,E.effectTag=8}}i(t,"b");function n(b,E){if(!e)return null;for(;E!==null;)t(b,E),E=E.sibling;return null}i(n,"c");function o(b,E){for(b=new Map;E!==null;)E.key!==null?b.set(E.key,E):b.set(E.index,E),E=E.sibling;return b}i(o,"d");function s(b,E){return b=Or(b,E),b.index=0,b.sibling=null,b}i(s,"e");function f(b,E,N){return b.index=N,e?(N=b.alternate,N!==null?(N=N.index,N<E?(b.effectTag=2,E):N):(b.effectTag=2,E)):E}i(f,"f");function m(b){return e&&b.alternate===null&&(b.effectTag=2),b}i(m,"g");function g(b,E,N,W){return E===null||E.tag!==6?(E=pa(N,b.mode,W),E.return=b,E):(E=s(E,N),E.return=b,E)}i(g,"h");function M(b,E,N,W){return E!==null&&E.elementType===N.type?(W=s(E,N.props),W.ref=ri(b,E,N),W.return=b,W):(W=Il(N.type,N.key,N.props,null,b.mode,W),W.ref=ri(b,E,N),W.return=b,W)}i(M,"k");function S(b,E,N,W){return E===null||E.tag!==4||E.stateNode.containerInfo!==N.containerInfo||E.stateNode.implementation!==N.implementation?(E=ha(N,b.mode,W),E.return=b,E):(E=s(E,N.children||[]),E.return=b,E)}i(S,"l");function re(b,E,N,W,ee){return E===null||E.tag!==7?(E=qn(N,b.mode,W,ee),E.return=b,E):(E=s(E,N),E.return=b,E)}i(re,"m");function se(b,E,N){if(typeof E=="string"||typeof E=="number")return E=pa(""+E,b.mode,N),E.return=b,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Kn:return N=Il(E.type,E.key,E.props,null,b.mode,N),N.ref=ri(b,null,E),N.return=b,N;case Yn:return E=ha(E,b.mode,N),E.return=b,E}if(dl(E)||Xn(E))return E=qn(E,b.mode,N,null),E.return=b,E;fl(b,E)}return null}i(se,"p");function Ie(b,E,N,W){var ee=E!==null?E.key:null;if(typeof N=="string"||typeof N=="number")return ee!==null?null:g(b,E,""+N,W);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Kn:return N.key===ee?N.type===dn?re(b,E,N.props.children,W,ee):M(b,E,N,W):null;case Yn:return N.key===ee?S(b,E,N,W):null}if(dl(N)||Xn(N))return ee!==null?null:re(b,E,N,W,null);fl(b,N)}return null}i(Ie,"x");function We(b,E,N,W,ee){if(typeof W=="string"||typeof W=="number")return b=b.get(N)||null,g(E,b,""+W,ee);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case Kn:return b=b.get(W.key===null?N:W.key)||null,W.type===dn?re(E,b,W.props.children,ee,W.key):M(E,b,W,ee);case Yn:return b=b.get(W.key===null?N:W.key)||null,S(E,b,W,ee)}if(dl(W)||Xn(W))return b=b.get(N)||null,re(E,b,W,ee,null);fl(E,W)}return null}i(We,"z");function Wt(b,E,N,W){for(var ee=null,ae=null,ye=E,Ve=E=0,rt=null;ye!==null&&Ve<N.length;Ve++){ye.index>Ve?(rt=ye,ye=null):rt=ye.sibling;var Re=Ie(b,ye,N[Ve],W);if(Re===null){ye===null&&(ye=rt);break}e&&ye&&Re.alternate===null&&t(b,ye),E=f(Re,E,Ve),ae===null?ee=Re:ae.sibling=Re,ae=Re,ye=rt}if(Ve===N.length)return n(b,ye),ee;if(ye===null){for(;Ve<N.length;Ve++)ye=se(b,N[Ve],W),ye!==null&&(E=f(ye,E,Ve),ae===null?ee=ye:ae.sibling=ye,ae=ye);return ee}for(ye=o(b,ye);Ve<N.length;Ve++)rt=We(ye,b,Ve,N[Ve],W),rt!==null&&(e&&rt.alternate!==null&&ye.delete(rt.key===null?Ve:rt.key),E=f(rt,E,Ve),ae===null?ee=rt:ae.sibling=rt,ae=rt);return e&&ye.forEach(function(Qn){return t(b,Qn)}),ee}i(Wt,"ca");function yt(b,E,N,W){var ee=Xn(N);if(typeof ee!="function")throw Error(h(150));if(N=ee.call(N),N==null)throw Error(h(151));for(var ae=ee=null,ye=E,Ve=E=0,rt=null,Re=N.next();ye!==null&&!Re.done;Ve++,Re=N.next()){ye.index>Ve?(rt=ye,ye=null):rt=ye.sibling;var Qn=Ie(b,ye,Re.value,W);if(Qn===null){ye===null&&(ye=rt);break}e&&ye&&Qn.alternate===null&&t(b,ye),E=f(Qn,E,Ve),ae===null?ee=Qn:ae.sibling=Qn,ae=Qn,ye=rt}if(Re.done)return n(b,ye),ee;if(ye===null){for(;!Re.done;Ve++,Re=N.next())Re=se(b,Re.value,W),Re!==null&&(E=f(Re,E,Ve),ae===null?ee=Re:ae.sibling=Re,ae=Re);return ee}for(ye=o(b,ye);!Re.done;Ve++,Re=N.next())Re=We(ye,b,Ve,Re.value,W),Re!==null&&(e&&Re.alternate!==null&&ye.delete(Re.key===null?Ve:Re.key),E=f(Re,E,Ve),ae===null?ee=Re:ae.sibling=Re,ae=Re);return e&&ye.forEach(function(oc){return t(b,oc)}),ee}return i(yt,"D"),function(b,E,N,W){var ee=typeof N=="object"&&N!==null&&N.type===dn&&N.key===null;ee&&(N=N.props.children);var ae=typeof N=="object"&&N!==null;if(ae)switch(N.$$typeof){case Kn:e:{for(ae=N.key,ee=E;ee!==null;){if(ee.key===ae){switch(ee.tag){case 7:if(N.type===dn){n(b,ee.sibling),E=s(ee,N.props.children),E.return=b,b=E;break e}break;default:if(ee.elementType===N.type){n(b,ee.sibling),E=s(ee,N.props),E.ref=ri(b,ee,N),E.return=b,b=E;break e}}n(b,ee);break}else t(b,ee);ee=ee.sibling}N.type===dn?(E=qn(N.props.children,b.mode,W,N.key),E.return=b,b=E):(W=Il(N.type,N.key,N.props,null,b.mode,W),W.ref=ri(b,E,N),W.return=b,b=W)}return m(b);case Yn:e:{for(ee=N.key;E!==null;){if(E.key===ee)if(E.tag===4&&E.stateNode.containerInfo===N.containerInfo&&E.stateNode.implementation===N.implementation){n(b,E.sibling),E=s(E,N.children||[]),E.return=b,b=E;break e}else{n(b,E);break}else t(b,E);E=E.sibling}E=ha(N,b.mode,W),E.return=b,b=E}return m(b)}if(typeof N=="string"||typeof N=="number")return N=""+N,E!==null&&E.tag===6?(n(b,E.sibling),E=s(E,N),E.return=b,b=E):(n(b,E),E=pa(N,b.mode,W),E.return=b,b=E),m(b);if(dl(N))return Wt(b,E,N,W);if(Xn(N))return yt(b,E,N,W);if(ae&&fl(b,N),typeof N=="undefined"&&!ee)switch(b.tag){case 1:case 0:throw b=b.type,Error(h(152,b.displayName||b.name||"Component"))}return n(b,E)}}i(Pa,"Rg");var po=Pa(!0),Ds=Pa(!1),oi={},ln={current:oi},ii={current:oi},li={current:oi};function kr(e){if(e===oi)throw Error(h(174));return e}i(kr,"ch");function As(e,t){switch(nt(li,t),nt(ii,e),nt(ln,oi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Li(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Li(t,e)}Qe(ln),nt(ln,t)}i(As,"dh");function ho(){Qe(ln),Qe(ii),Qe(li)}i(ho,"eh");function Oa(e){kr(li.current);var t=kr(ln.current),n=Li(t,e.type);t!==n&&(nt(ii,e),nt(ln,n))}i(Oa,"fh");function Is(e){ii.current===e&&(Qe(ln),Qe(ii))}i(Is,"gh");var ot={current:0};function ml(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===Bo||n.data===vn))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.effectTag&64)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}i(ml,"hh");function Fs(e,t){return{responder:e,props:t}}i(Fs,"ih");var pl=$t.ReactCurrentDispatcher,Ut=$t.ReactCurrentBatchConfig,jn=0,at=null,kt=null,_t=null,hl=!1;function At(){throw Error(h(321))}i(At,"Q");function Hs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fn(e[n],t[n]))return!1;return!0}i(Hs,"nh");function $s(e,t,n,o,s,f){if(jn=f,at=t,t.memoizedState=null,t.updateQueue=null,t.expirationTime=0,pl.current=e===null||e.memoizedState===null?Ru:Pu,e=n(o,s),t.expirationTime===jn){f=0;do{if(t.expirationTime=0,!(25>f))throw Error(h(301));f+=1,_t=kt=null,t.updateQueue=null,pl.current=Ou,e=n(o,s)}while(t.expirationTime===jn)}if(pl.current=wl,t=kt!==null&&kt.next!==null,jn=0,_t=kt=at=null,hl=!1,t)throw Error(h(300));return e}i($s,"oh");function go(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?at.memoizedState=_t=e:_t=_t.next=e,_t}i(go,"th");function vo(){if(kt===null){var e=at.alternate;e=e!==null?e.memoizedState:null}else e=kt.next;var t=_t===null?at.memoizedState:_t.next;if(t!==null)_t=t,kt=e;else{if(e===null)throw Error(h(310));kt=e,e={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},_t===null?at.memoizedState=_t=e:_t=_t.next=e}return _t}i(vo,"uh");function _r(e,t){return typeof t=="function"?t(e):t}i(_r,"vh");function gl(e){var t=vo(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var o=kt,s=o.baseQueue,f=n.pending;if(f!==null){if(s!==null){var m=s.next;s.next=f.next,f.next=m}o.baseQueue=s=f,n.pending=null}if(s!==null){s=s.next,o=o.baseState;var g=m=f=null,M=s;do{var S=M.expirationTime;if(S<jn){var re={expirationTime:M.expirationTime,suspenseConfig:M.suspenseConfig,action:M.action,eagerReducer:M.eagerReducer,eagerState:M.eagerState,next:null};g===null?(m=g=re,f=o):g=g.next=re,S>at.expirationTime&&(at.expirationTime=S,Al(S))}else g!==null&&(g=g.next={expirationTime:1073741823,suspenseConfig:M.suspenseConfig,action:M.action,eagerReducer:M.eagerReducer,eagerState:M.eagerState,next:null}),Eu(S,M.suspenseConfig),o=M.eagerReducer===e?M.eagerState:e(o,M.action);M=M.next}while(M!==null&&M!==s);g===null?f=o:g.next=m,Fn(o,t.memoizedState)||(sn=!0),t.memoizedState=o,t.baseState=f,t.baseQueue=g,n.lastRenderedState=o}return[t.memoizedState,n.dispatch]}i(gl,"wh");function vl(e){var t=vo(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var o=n.dispatch,s=n.pending,f=t.memoizedState;if(s!==null){n.pending=null;var m=s=s.next;do f=e(f,m.action),m=m.next;while(m!==s);Fn(f,t.memoizedState)||(sn=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),n.lastRenderedState=f}return[f,o]}i(vl,"xh");function Vs(e){var t=go();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:_r,lastRenderedState:e},e=e.dispatch=Ba.bind(null,at,e),[t.memoizedState,e]}i(Vs,"yh");function Bs(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=at.updateQueue,t===null?(t={lastEffect:null},at.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}i(Bs,"Ah");function Da(){return vo().memoizedState}i(Da,"Bh");function zs(e,t,n,o){var s=go();at.effectTag|=e,s.memoizedState=Bs(1|t,n,void 0,o===void 0?null:o)}i(zs,"Ch");function js(e,t,n,o){var s=vo();o=o===void 0?null:o;var f=void 0;if(kt!==null){var m=kt.memoizedState;if(f=m.destroy,o!==null&&Hs(o,m.deps)){Bs(t,n,f,o);return}}at.effectTag|=e,s.memoizedState=Bs(1|t,n,f,o)}i(js,"Dh");function Aa(e,t){return zs(516,4,e,t)}i(Aa,"Eh");function Cl(e,t){return js(516,4,e,t)}i(Cl,"Fh");function Ia(e,t){return js(4,2,e,t)}i(Ia,"Gh");function Fa(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}i(Fa,"Hh");function Ha(e,t,n){return n=n!=null?n.concat([e]):null,js(4,2,Fa.bind(null,t,e),n)}i(Ha,"Ih");function Us(){}i(Us,"Jh");function $a(e,t){return go().memoizedState=[e,t===void 0?null:t],e}i($a,"Kh");function yl(e,t){var n=vo();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Hs(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}i(yl,"Lh");function Va(e,t){var n=vo();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Hs(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}i(Va,"Mh");function Ws(e,t,n){var o=y();T(98>o?98:o,function(){e(!0)}),T(97<o?97:o,function(){var s=Ut.suspense;Ut.suspense=t===void 0?null:t;try{e(!1),n()}finally{Ut.suspense=s}})}i(Ws,"Nh");function Ba(e,t,n){var o=un(),s=ni.suspense;o=Tr(o,e,s),s={expirationTime:o,suspenseConfig:s,action:n,eagerReducer:null,eagerState:null,next:null};var f=t.pending;if(f===null?s.next=s:(s.next=f.next,f.next=s),t.pending=s,f=e.alternate,e===at||f!==null&&f===at)hl=!0,s.expirationTime=jn,at.expirationTime=jn;else{if(e.expirationTime===0&&(f===null||f.expirationTime===0)&&(f=t.lastRenderedReducer,f!==null))try{var m=t.lastRenderedState,g=f(m,n);if(s.eagerReducer=f,s.eagerState=g,Fn(g,m))return}catch{}finally{}Zn(e,o)}}i(Ba,"zh");var wl={readContext:Ke,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useResponder:At,useDeferredValue:At,useTransition:At},Ru={readContext:Ke,useCallback:$a,useContext:Ke,useEffect:Aa,useImperativeHandle:i(function(e,t,n){return n=n!=null?n.concat([e]):null,zs(4,2,Fa.bind(null,t,e),n)},"useImperativeHandle"),useLayoutEffect:i(function(e,t){return zs(4,2,e,t)},"useLayoutEffect"),useMemo:i(function(e,t){var n=go();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},"useMemo"),useReducer:i(function(e,t,n){var o=go();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e=o.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=Ba.bind(null,at,e),[o.memoizedState,e]},"useReducer"),useRef:i(function(e){var t=go();return e={current:e},t.memoizedState=e},"useRef"),useState:Vs,useDebugValue:Us,useResponder:Fs,useDeferredValue:i(function(e,t){var n=Vs(e),o=n[0],s=n[1];return Aa(function(){var f=Ut.suspense;Ut.suspense=t===void 0?null:t;try{s(e)}finally{Ut.suspense=f}},[e,t]),o},"useDeferredValue"),useTransition:i(function(e){var t=Vs(!1),n=t[0];return t=t[1],[$a(Ws.bind(null,t,e),[t,e]),n]},"useTransition")},Pu={readContext:Ke,useCallback:yl,useContext:Ke,useEffect:Cl,useImperativeHandle:Ha,useLayoutEffect:Ia,useMemo:Va,useReducer:gl,useRef:Da,useState:i(function(){return gl(_r)},"useState"),useDebugValue:Us,useResponder:Fs,useDeferredValue:i(function(e,t){var n=gl(_r),o=n[0],s=n[1];return Cl(function(){var f=Ut.suspense;Ut.suspense=t===void 0?null:t;try{s(e)}finally{Ut.suspense=f}},[e,t]),o},"useDeferredValue"),useTransition:i(function(e){var t=gl(_r),n=t[0];return t=t[1],[yl(Ws.bind(null,t,e),[t,e]),n]},"useTransition")},Ou={readContext:Ke,useCallback:yl,useContext:Ke,useEffect:Cl,useImperativeHandle:Ha,useLayoutEffect:Ia,useMemo:Va,useReducer:vl,useRef:Da,useState:i(function(){return vl(_r)},"useState"),useDebugValue:Us,useResponder:Fs,useDeferredValue:i(function(e,t){var n=vl(_r),o=n[0],s=n[1];return Cl(function(){var f=Ut.suspense;Ut.suspense=t===void 0?null:t;try{s(e)}finally{Ut.suspense=f}},[e,t]),o},"useDeferredValue"),useTransition:i(function(e){var t=vl(_r),n=t[0];return t=t[1],[yl(Ws.bind(null,t,e),[t,e]),n]},"useTransition")},kn=null,Un=null,Mr=!1;function za(e,t){var n=cn(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}i(za,"Rh");function ja(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}i(ja,"Th");function Zs(e){if(Mr){var t=Un;if(t){var n=t;if(!ja(e,t)){if(t=Rn(n.nextSibling),!t||!ja(e,t)){e.effectTag=e.effectTag&-1025|2,Mr=!1,kn=e;return}za(kn,n)}kn=e,Un=Rn(t.firstChild)}else e.effectTag=e.effectTag&-1025|2,Mr=!1,kn=e}}i(Zs,"Uh");function Ua(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kn=e}i(Ua,"Vh");function xl(e){if(e!==kn)return!1;if(!Mr)return Ua(e),Mr=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!jo(t,e.memoizedProps))for(t=Un;t;)za(e,t),t=Rn(t.nextSibling);if(Ua(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===ts){if(t===0){Un=Rn(e.nextSibling);break e}t--}else n!==$i&&n!==vn&&n!==Bo||t++}e=e.nextSibling}Un=null}}else Un=kn?Rn(e.stateNode.nextSibling):null;return!0}i(xl,"Wh");function qs(){Un=kn=null,Mr=!1}i(qs,"Xh");var Du=$t.ReactCurrentOwner,sn=!1;function It(e,t,n,o){t.child=e===null?Ds(t,null,n,o):po(t,e.child,n,o)}i(It,"R");function Wa(e,t,n,o,s){n=n.render;var f=t.ref;return Ue(t,s),o=$s(e,t,n,o,f,s),e!==null&&!sn?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=s&&(e.expirationTime=0),_n(e,t,s)):(t.effectTag|=1,It(e,t,o,s),t.child)}i(Wa,"Zh");function Za(e,t,n,o,s,f){if(e===null){var m=n.type;return typeof m=="function"&&!ma(m)&&m.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=m,qa(e,t,m,o,s,f)):(e=Il(n.type,null,o,null,t.mode,f),e.ref=t.ref,e.return=t,t.child=e)}return m=e.child,s<f&&(s=m.memoizedProps,n=n.compare,n=n!==null?n:yr,n(s,o)&&e.ref===t.ref)?_n(e,t,f):(t.effectTag|=1,e=Or(m,o),e.ref=t.ref,e.return=t,t.child=e)}i(Za,"ai");function qa(e,t,n,o,s,f){return e!==null&&yr(e.memoizedProps,o)&&e.ref===t.ref&&(sn=!1,s<f)?(t.expirationTime=e.expirationTime,_n(e,t,f)):Qs(e,t,n,o,f)}i(qa,"ci");function Qa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.effectTag|=128)}i(Qa,"ei");function Qs(e,t,n,o,s){var f=bt(n)?xn:ut.current;return f=$n(t,f),Ue(t,s),n=$s(e,t,n,o,f,s),e!==null&&!sn?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=s&&(e.expirationTime=0),_n(e,t,s)):(t.effectTag|=1,It(e,t,n,s),t.child)}i(Qs,"di");function Ka(e,t,n,o,s){if(bt(n)){var f=!0;Vn(t)}else f=!1;if(Ue(t,s),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),Na(t,n,o),Os(t,n,o,s),o=!0;else if(e===null){var m=t.stateNode,g=t.memoizedProps;m.props=g;var M=m.context,S=n.contextType;typeof S=="object"&&S!==null?S=Ke(S):(S=bt(n)?xn:ut.current,S=$n(t,S));var re=n.getDerivedStateFromProps,se=typeof re=="function"||typeof m.getSnapshotBeforeUpdate=="function";se||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(g!==o||M!==S)&&Ra(t,m,o,S),Tt=!1;var Ie=t.memoizedState;m.state=Ie,zn(t,o,m,s),M=t.memoizedState,g!==o||Ie!==M||Et.current||Tt?(typeof re=="function"&&(ul(t,n,re,o),M=t.memoizedState),(g=Tt||Ta(t,n,g,o,Ie,M,S))?(se||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(t.effectTag|=4)):(typeof m.componentDidMount=="function"&&(t.effectTag|=4),t.memoizedProps=o,t.memoizedState=M),m.props=o,m.state=M,m.context=S,o=g):(typeof m.componentDidMount=="function"&&(t.effectTag|=4),o=!1)}else m=t.stateNode,dt(e,t),g=t.memoizedProps,m.props=t.type===t.elementType?g:de(t.type,g),M=m.context,S=n.contextType,typeof S=="object"&&S!==null?S=Ke(S):(S=bt(n)?xn:ut.current,S=$n(t,S)),re=n.getDerivedStateFromProps,(se=typeof re=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(g!==o||M!==S)&&Ra(t,m,o,S),Tt=!1,M=t.memoizedState,m.state=M,zn(t,o,m,s),Ie=t.memoizedState,g!==o||M!==Ie||Et.current||Tt?(typeof re=="function"&&(ul(t,n,re,o),Ie=t.memoizedState),(re=Tt||Ta(t,n,g,o,M,Ie,S))?(se||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(o,Ie,S),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(o,Ie,S)),typeof m.componentDidUpdate=="function"&&(t.effectTag|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(t.effectTag|=256)):(typeof m.componentDidUpdate!="function"||g===e.memoizedProps&&M===e.memoizedState||(t.effectTag|=4),typeof m.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&M===e.memoizedState||(t.effectTag|=256),t.memoizedProps=o,t.memoizedState=Ie),m.props=o,m.state=Ie,m.context=S,o=re):(typeof m.componentDidUpdate!="function"||g===e.memoizedProps&&M===e.memoizedState||(t.effectTag|=4),typeof m.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&M===e.memoizedState||(t.effectTag|=256),o=!1);return Ks(e,t,n,o,f,s)}i(Ka,"fi");function Ks(e,t,n,o,s,f){Qa(e,t);var m=(t.effectTag&64)!==0;if(!o&&!m)return s&&lo(t,n,!1),_n(e,t,f);o=t.stateNode,Du.current=t;var g=m&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.effectTag|=1,e!==null&&m?(t.child=po(t,e.child,null,f),t.child=po(t,null,g,f)):It(e,t,g,f),t.memoizedState=o.state,s&&lo(t,n,!0),t.child}i(Ks,"gi");function Ya(e){var t=e.stateNode;t.pendingContext?ll(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ll(e,t.context,!1),As(e,t.containerInfo)}i(Ya,"hi");var Ys={dehydrated:null,retryTime:0};function Ga(e,t,n){var o=t.mode,s=t.pendingProps,f=ot.current,m=!1,g;if((g=(t.effectTag&64)!==0)||(g=(f&2)!==0&&(e===null||e.memoizedState!==null)),g?(m=!0,t.effectTag&=-65):e!==null&&e.memoizedState===null||s.fallback===void 0||s.unstable_avoidThisFallback===!0||(f|=1),nt(ot,f&1),e===null){if(s.fallback!==void 0&&Zs(t),m){if(m=s.fallback,s=qn(null,o,0,null),s.return=t,!(t.mode&2))for(e=t.memoizedState!==null?t.child.child:t.child,s.child=e;e!==null;)e.return=s,e=e.sibling;return n=qn(m,o,n,null),n.return=t,s.sibling=n,t.memoizedState=Ys,t.child=s,n}return o=s.children,t.memoizedState=null,t.child=Ds(t,null,o,n)}if(e.memoizedState!==null){if(e=e.child,o=e.sibling,m){if(s=s.fallback,n=Or(e,e.pendingProps),n.return=t,!(t.mode&2)&&(m=t.memoizedState!==null?t.child.child:t.child,m!==e.child))for(n.child=m;m!==null;)m.return=n,m=m.sibling;return o=Or(o,s),o.return=t,n.sibling=o,n.childExpirationTime=0,t.memoizedState=Ys,t.child=n,o}return n=po(t,e.child,s.children,n),t.memoizedState=null,t.child=n}if(e=e.child,m){if(m=s.fallback,s=qn(null,o,0,null),s.return=t,s.child=e,e!==null&&(e.return=s),!(t.mode&2))for(e=t.memoizedState!==null?t.child.child:t.child,s.child=e;e!==null;)e.return=s,e=e.sibling;return n=qn(m,o,n,null),n.return=t,s.sibling=n,n.effectTag|=2,s.childExpirationTime=0,t.memoizedState=Ys,t.child=s,n}return t.memoizedState=null,t.child=po(t,e,s.children,n)}i(Ga,"ji");function Xa(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t),we(e.return,t)}i(Xa,"ki");function Gs(e,t,n,o,s,f){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailExpiration:0,tailMode:s,lastEffect:f}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=o,m.tail=n,m.tailExpiration=0,m.tailMode=s,m.lastEffect=f)}i(Gs,"li");function Ja(e,t,n){var o=t.pendingProps,s=o.revealOrder,f=o.tail;if(It(e,t,o.children,n),o=ot.current,o&2)o=o&1|2,t.effectTag|=64;else{if(e!==null&&e.effectTag&64)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xa(e,n);else if(e.tag===19)Xa(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(nt(ot,o),!(t.mode&2))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ml(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Gs(t,!1,s,n,f,t.lastEffect);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ml(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Gs(t,!0,n,null,f,t.lastEffect);break;case"together":Gs(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}i(Ja,"mi");function _n(e,t,n){e!==null&&(t.dependencies=e.dependencies);var o=t.expirationTime;if(o!==0&&Al(o),t.childExpirationTime<n)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Or(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Or(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}i(_n,"$h");var eu,Xs,tu,nu;eu=i(function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},"ni"),Xs=i(function(){},"oi"),tu=i(function(e,t,n,o,s){var f=e.memoizedProps;if(f!==o){var m=t.stateNode;switch(kr(ln.current),e=null,n){case"input":f=Hr(m,f),o=Hr(m,o),e=[];break;case"option":f=ki(m,f),o=ki(m,o),e=[];break;case"select":f=L({},f,{value:void 0}),o=L({},o,{value:void 0}),e=[];break;case"textarea":f=_i(m,f),o=_i(m,o),e=[];break;default:typeof f.onClick!="function"&&typeof o.onClick=="function"&&(m.onclick=ur)}Fo(n,o);var g,M;n=null;for(g in f)if(!o.hasOwnProperty(g)&&f.hasOwnProperty(g)&&f[g]!=null)if(g==="style")for(M in m=f[g],m)m.hasOwnProperty(M)&&(n||(n={}),n[M]="");else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&($.hasOwnProperty(g)?e||(e=[]):(e=e||[]).push(g,null));for(g in o){var S=o[g];if(m=f!=null?f[g]:void 0,o.hasOwnProperty(g)&&S!==m&&(S!=null||m!=null))if(g==="style")if(m){for(M in m)!m.hasOwnProperty(M)||S&&S.hasOwnProperty(M)||(n||(n={}),n[M]="");for(M in S)S.hasOwnProperty(M)&&m[M]!==S[M]&&(n||(n={}),n[M]=S[M])}else n||(e||(e=[]),e.push(g,n)),n=S;else g==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,m=m?m.__html:void 0,S!=null&&m!==S&&(e=e||[]).push(g,S)):g==="children"?m===S||typeof S!="string"&&typeof S!="number"||(e=e||[]).push(g,""+S):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&($.hasOwnProperty(g)?(S!=null&&jt(s,g),e||m===S||(e=[])):(e=e||[]).push(g,S))}n&&(e=e||[]).push("style",n),s=e,(t.updateQueue=s)&&(t.effectTag|=4)}},"pi"),nu=i(function(e,t,n,o){n!==o&&(t.effectTag|=4)},"qi");function El(e,t){switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}i(El,"ri");function Au(e,t,n){var o=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return bt(t.type)&&xr(),null;case 3:return ho(),Qe(Et),Qe(ut),n=t.stateNode,n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),e!==null&&e.child!==null||!xl(t)||(t.effectTag|=4),Xs(t),null;case 5:Is(t),n=kr(li.current);var s=t.type;if(e!==null&&t.stateNode!=null)tu(e,t,s,o,n),e.ref!==t.ref&&(t.effectTag|=128);else{if(!o){if(t.stateNode===null)throw Error(h(166));return null}if(e=kr(ln.current),xl(t)){o=t.stateNode,s=t.type;var f=t.memoizedProps;switch(o[tn]=t,o[Gr]=f,s){case"iframe":case"object":case"embed":Ye("load",o);break;case"video":case"audio":for(e=0;e<mn.length;e++)Ye(mn[e],o);break;case"source":Ye("error",o);break;case"img":case"image":case"link":Ye("error",o),Ye("load",o);break;case"form":Ye("reset",o),Ye("submit",o);break;case"details":Ye("toggle",o);break;case"input":xi(o,f),Ye("invalid",o),jt(n,"onChange");break;case"select":o._wrapperState={wasMultiple:!!f.multiple},Ye("invalid",o),jt(n,"onChange");break;case"textarea":bo(o,f),Ye("invalid",o),jt(n,"onChange")}Fo(s,f),e=null;for(var m in f)if(f.hasOwnProperty(m)){var g=f[m];m==="children"?typeof g=="string"?o.textContent!==g&&(e=["children",g]):typeof g=="number"&&o.textContent!==""+g&&(e=["children",""+g]):$.hasOwnProperty(m)&&g!=null&&jt(n,m)}switch(s){case"input":Jn(o),jl(o,f,!0);break;case"textarea":Jn(o),Mi(o);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(o.onclick=ur)}n=e,t.updateQueue=n,n!==null&&(t.effectTag|=4)}else{switch(m=n.nodeType===9?n:n.ownerDocument,e===Ii&&(e=Ul(s)),e===Ii?s==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=m.createElement(s,{is:o.is}):(e=m.createElement(s),s==="select"&&(m=e,o.multiple?m.multiple=!0:o.size&&(m.size=o.size))):e=m.createElementNS(e,s),e[tn]=t,e[Gr]=o,eu(e,t,!1,!1),t.stateNode=e,m=Ho(s,o),s){case"iframe":case"object":case"embed":Ye("load",e),g=o;break;case"video":case"audio":for(g=0;g<mn.length;g++)Ye(mn[g],e);g=o;break;case"source":Ye("error",e),g=o;break;case"img":case"image":case"link":Ye("error",e),Ye("load",e),g=o;break;case"form":Ye("reset",e),Ye("submit",e),g=o;break;case"details":Ye("toggle",e),g=o;break;case"input":xi(e,o),g=Hr(e,o),Ye("invalid",e),jt(n,"onChange");break;case"option":g=ki(e,o);break;case"select":e._wrapperState={wasMultiple:!!o.multiple},g=L({},o,{value:void 0}),Ye("invalid",e),jt(n,"onChange");break;case"textarea":bo(e,o),g=_i(e,o),Ye("invalid",e),jt(n,"onChange");break;default:g=o}Fo(s,g);var M=g;for(f in M)if(M.hasOwnProperty(f)){var S=M[f];f==="style"?Io(e,S):f==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&er(e,S)):f==="children"?typeof S=="string"?(s!=="textarea"||S!=="")&&Vt(e,S):typeof S=="number"&&Vt(e,""+S):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&($.hasOwnProperty(f)?S!=null&&jt(n,f):S!=null&&wo(e,f,S,m))}switch(s){case"input":Jn(e),jl(e,o,!1);break;case"textarea":Jn(e),Mi(e);break;case"option":o.value!=null&&e.setAttribute("value",""+qt(o.value));break;case"select":e.multiple=!!o.multiple,n=o.value,n!=null?Sn(e,!!o.multiple,n,!1):o.defaultValue!=null&&Sn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof g.onClick=="function"&&(e.onclick=ur)}Vi(s,o)&&(t.effectTag|=4)}t.ref!==null&&(t.effectTag|=128)}return null;case 6:if(e&&t.stateNode!=null)nu(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(h(166));n=kr(li.current),kr(ln.current),xl(t)?(n=t.stateNode,o=t.memoizedProps,n[tn]=t,n.nodeValue!==o&&(t.effectTag|=4)):(n=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),n[tn]=t,t.stateNode=n)}return null;case 13:return Qe(ot),o=t.memoizedState,t.effectTag&64?(t.expirationTime=n,t):(n=o!==null,o=!1,e===null?t.memoizedProps.fallback!==void 0&&xl(t):(s=e.memoizedState,o=s!==null,n||s===null||(s=e.child.sibling,s!==null&&(f=t.firstEffect,f!==null?(t.firstEffect=s,s.nextEffect=f):(t.firstEffect=t.lastEffect=s,s.nextEffect=null),s.effectTag=8))),n&&!o&&t.mode&2&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||ot.current&1?mt===Sr&&(mt=_l):((mt===Sr||mt===_l)&&(mt=Ml),ai!==0&&Ft!==null&&(Dr(Ft,Ot),Lu(Ft,ai)))),(n||o)&&(t.effectTag|=4),null);case 4:return ho(),Xs(t),null;case 10:return et(t),null;case 17:return bt(t.type)&&xr(),null;case 19:if(Qe(ot),o=t.memoizedState,o===null)return null;if(s=(t.effectTag&64)!==0,f=o.rendering,f===null){if(s)El(o,!1);else if(mt!==Sr||e!==null&&e.effectTag&64)for(f=t.child;f!==null;){if(e=ml(f),e!==null){for(t.effectTag|=64,El(o,!1),s=e.updateQueue,s!==null&&(t.updateQueue=s,t.effectTag|=4),o.lastEffect===null&&(t.firstEffect=null),t.lastEffect=o.lastEffect,o=t.child;o!==null;)s=o,f=n,s.effectTag&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,e=s.alternate,e===null?(s.childExpirationTime=0,s.expirationTime=f,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null):(s.childExpirationTime=e.childExpirationTime,s.expirationTime=e.expirationTime,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,f=e.dependencies,s.dependencies=f===null?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),o=o.sibling;return nt(ot,ot.current&1|2),t.child}f=f.sibling}}else{if(!s)if(e=ml(f),e!==null){if(t.effectTag|=64,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.effectTag|=4),El(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate)return t=t.lastEffect=o.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*v()-o.renderingStartTime>o.tailExpiration&&1<n&&(t.effectTag|=64,s=!0,El(o,!1),t.expirationTime=t.childExpirationTime=n-1);o.isBackwards?(f.sibling=t.child,t.child=f):(n=o.last,n!==null?n.sibling=f:t.child=f,o.last=f)}return o.tail!==null?(o.tailExpiration===0&&(o.tailExpiration=v()+500),n=o.tail,o.rendering=n,o.tail=n.sibling,o.lastEffect=t.lastEffect,o.renderingStartTime=v(),n.sibling=null,t=ot.current,nt(ot,s?t&1|2:t&1),n):null}throw Error(h(156,t.tag))}i(Au,"si");function Iu(e){switch(e.tag){case 1:bt(e.type)&&xr();var t=e.effectTag;return t&4096?(e.effectTag=t&-4097|64,e):null;case 3:if(ho(),Qe(Et),Qe(ut),t=e.effectTag,t&64)throw Error(h(285));return e.effectTag=t&-4097|64,e;case 5:return Is(e),null;case 13:return Qe(ot),t=e.effectTag,t&4096?(e.effectTag=t&-4097|64,e):null;case 19:return Qe(ot),null;case 4:return ho(),null;case 10:return et(e),null;default:return null}}i(Iu,"zi");function Js(e,t){return{value:e,source:t,stack:Eo(t)}}i(Js,"Ai");var Fu=typeof WeakSet=="function"?WeakSet:Set;function ea(e,t){var n=t.source,o=t.stack;o===null&&n!==null&&(o=Eo(n)),n!==null&&Zt(n.type),t=t.value,e!==null&&e.tag===1&&Zt(e.type);try{console.error(t)}catch(s){setTimeout(function(){throw s})}}i(ea,"Ci");function Hu(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(n){Pr(e,n)}}i(Hu,"Di");function ru(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Pr(e,n)}else t.current=null}i(ru,"Fi");function $u(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.effectTag&256&&e!==null){var n=e.memoizedProps,o=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:de(t.type,n),o),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(h(163))}i($u,"Gi");function ou(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.destroy;n.destroy=void 0,o!==void 0&&o()}n=n.next}while(n!==t)}}i(ou,"Hi");function iu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}i(iu,"Ii");function Vu(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:iu(3,n);return;case 1:if(e=n.stateNode,n.effectTag&4)if(t===null)e.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:de(n.type,t.memoizedProps);e.componentDidUpdate(o,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}t=n.updateQueue,t!==null&&al(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}al(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.effectTag&4&&Vi(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Oi(n))));return;case 19:case 17:case 20:case 21:return}throw Error(h(163))}i(Vu,"Ji");function lu(e,t,n){switch(typeof fa=="function"&&fa(t),t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var o=e.next;T(97<n?97:n,function(){var s=o;do{var f=s.destroy;if(f!==void 0){var m=t;try{f()}catch(g){Pr(m,g)}}s=s.next}while(s!==o)})}break;case 1:ru(t),n=t.stateNode,typeof n.componentWillUnmount=="function"&&Hu(t,n);break;case 5:ru(t);break;case 4:cu(e,t,n)}}i(lu,"Ki");function su(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,t!==null&&su(t)}i(su,"Ni");function au(e){return e.tag===5||e.tag===3||e.tag===4}i(au,"Oi");function uu(e){e:{for(var t=e.return;t!==null;){if(au(t)){var n=t;break e}t=t.return}throw Error(h(160))}switch(t=n.stateNode,n.tag){case 5:var o=!1;break;case 3:t=t.containerInfo,o=!0;break;case 4:t=t.containerInfo,o=!0;break;default:throw Error(h(161))}n.effectTag&16&&(Vt(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||au(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.effectTag&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.effectTag&2)){n=n.stateNode;break e}}o?ta(e,n,t):na(e,n,t)}i(uu,"Pi");function ta(e,t,n){var o=e.tag,s=o===5||o===6;if(s)e=s?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ur));else if(o!==4&&(e=e.child,e!==null))for(ta(e,t,n),e=e.sibling;e!==null;)ta(e,t,n),e=e.sibling}i(ta,"Qi");function na(e,t,n){var o=e.tag,s=o===5||o===6;if(s)e=s?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(na(e,t,n),e=e.sibling;e!==null;)na(e,t,n),e=e.sibling}i(na,"Ri");function cu(e,t,n){for(var o=t,s=!1,f,m;;){if(!s){s=o.return;e:for(;;){if(s===null)throw Error(h(160));switch(f=s.stateNode,s.tag){case 5:m=!1;break e;case 3:f=f.containerInfo,m=!0;break e;case 4:f=f.containerInfo,m=!0;break e}s=s.return}s=!0}if(o.tag===5||o.tag===6){e:for(var g=e,M=o,S=n,re=M;;)if(lu(g,re,S),re.child!==null&&re.tag!==4)re.child.return=re,re=re.child;else{if(re===M)break e;for(;re.sibling===null;){if(re.return===null||re.return===M)break e;re=re.return}re.sibling.return=re.return,re=re.sibling}m?(g=f,M=o.stateNode,g.nodeType===8?g.parentNode.removeChild(M):g.removeChild(M)):f.removeChild(o.stateNode)}else if(o.tag===4){if(o.child!==null){f=o.stateNode.containerInfo,m=!0,o.child.return=o,o=o.child;continue}}else if(lu(e,o,n),o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return,o.tag===4&&(s=!1)}o.sibling.return=o.return,o=o.sibling}}i(cu,"Mi");function ra(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:ou(3,t);return;case 1:return;case 5:var n=t.stateNode;if(n!=null){var o=t.memoizedProps,s=e!==null?e.memoizedProps:o;e=t.type;var f=t.updateQueue;if(t.updateQueue=null,f!==null){for(n[Gr]=o,e==="input"&&o.type==="radio"&&o.name!=null&&Ei(n,o),Ho(e,s),t=Ho(e,o),s=0;s<f.length;s+=2){var m=f[s],g=f[s+1];m==="style"?Io(n,g):m==="dangerouslySetInnerHTML"?er(n,g):m==="children"?Vt(n,g):wo(n,m,g,t)}switch(e){case"input":Je(n,o);break;case"textarea":$r(n,o);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!o.multiple,e=o.value,e!=null?Sn(n,!!o.multiple,e,!1):t!==!!o.multiple&&(o.defaultValue!=null?Sn(n,!!o.multiple,o.defaultValue,!0):Sn(n,!!o.multiple,o.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(h(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:t=t.stateNode,t.hydrate&&(t.hydrate=!1,Oi(t.containerInfo));return;case 12:return;case 13:if(n=t,t.memoizedState===null?o=!1:(o=!0,n=t.child,la=v()),n!==null)e:for(e=n;;){if(e.tag===5)f=e.stateNode,o?(f=f.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(f=e.stateNode,s=e.memoizedProps.style,s=s!=null&&s.hasOwnProperty("display")?s.display:null,f.style.display=Ai("display",s));else if(e.tag===6)e.stateNode.nodeValue=o?"":e.memoizedProps;else if(e.tag===13&&e.memoizedState!==null&&e.memoizedState.dehydrated===null){f=e.child.sibling,f.return=e,e=f;continue}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}du(t);return;case 19:du(t);return;case 17:return}throw Error(h(163))}i(ra,"Si");function du(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Fu),t.forEach(function(o){var s=Yu.bind(null,e,o);n.has(o)||(n.add(o),o.then(s,s))})}}i(du,"Ui");var Bu=typeof WeakMap=="function"?WeakMap:Map;function fu(e,t,n){n=Nt(n,null),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Nl||(Nl=!0,sa=o),ea(e,t)},n}i(fu,"Xi");function mu(e,t,n){n=Nt(n,null),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=t.value;n.payload=function(){return ea(e,t),o(s)}}var f=e.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(n.callback=function(){typeof o!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this),ea(e,t));var m=t.stack;this.componentDidCatch(t.value,{componentStack:m!==null?m:""})}),n}i(mu,"$i");var zu=Math.ceil,bl=$t.ReactCurrentDispatcher,pu=$t.ReactCurrentOwner,ft=0,oa=8,Jt=16,an=32,Sr=0,kl=1,hu=2,_l=3,Ml=4,ia=5,Ee=ft,Ft=null,Ne=null,Ot=0,mt=Sr,Sl=null,Mn=1073741823,si=1073741823,Ll=null,ai=0,Tl=!1,la=0,gu=500,me=null,Nl=!1,sa=null,Wn=null,Rl=!1,ui=null,ci=90,Lr=null,di=0,aa=null,Pl=0;function un(){return(Ee&(Jt|an))!==ft?1073741821-(v()/10|0):Pl!==0?Pl:Pl=1073741821-(v()/10|0)}i(un,"Gg");function Tr(e,t,n){if(t=t.mode,!(t&2))return 1073741823;var o=y();if(!(t&4))return o===99?1073741823:1073741822;if((Ee&Jt)!==ft)return Ot;if(n!==null)e=Q(e,n.timeoutMs|0||5e3,250);else switch(o){case 99:e=1073741823;break;case 98:e=Q(e,150,100);break;case 97:case 96:e=Q(e,5e3,250);break;case 95:e=2;break;default:throw Error(h(326))}return Ft!==null&&e===Ot&&--e,e}i(Tr,"Hg");function Zn(e,t){if(50<di)throw di=0,aa=null,Error(h(185));if(e=Ol(e,t),e!==null){var n=y();t===1073741823?(Ee&oa)!==ft&&(Ee&(Jt|an))===ft?ua(e):(Ht(e),Ee===ft&&G()):Ht(e),(Ee&4)===ft||n!==98&&n!==99||(Lr===null?Lr=new Map([[e,t]]):(n=Lr.get(e),(n===void 0||n>t)&&Lr.set(e,t)))}}i(Zn,"Ig");function Ol(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t);var o=e.return,s=null;if(o===null&&e.tag===3)s=e.stateNode;else for(;o!==null;){if(n=o.alternate,o.childExpirationTime<t&&(o.childExpirationTime=t),n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t),o.return===null&&o.tag===3){s=o.stateNode;break}o=o.return}return s!==null&&(Ft===s&&(Al(t),mt===Ml&&Dr(s,Ot)),Lu(s,t)),s}i(Ol,"xj");function Dl(e){var t=e.lastExpiredTime;if(t!==0||(t=e.firstPendingTime,!Su(e,t)))return t;var n=e.lastPingedTime;return e=e.nextKnownPendingLevel,e=n>e?n:e,2>=e&&t!==e?0:e}i(Dl,"zj");function Ht(e){if(e.lastExpiredTime!==0)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=F(ua.bind(null,e));else{var t=Dl(e),n=e.callbackNode;if(t===0)n!==null&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var o=un();if(t===1073741823?o=99:t===1||t===2?o=95:(o=10*(1073741821-t)-10*(1073741821-o),o=0>=o?99:250>=o?98:5250>=o?97:95),n!==null){var s=e.callbackPriority;if(e.callbackExpirationTime===t&&s>=o)return;n!==mo&&so(n)}e.callbackExpirationTime=t,e.callbackPriority=o,t=t===1073741823?F(ua.bind(null,e)):q(o,vu.bind(null,e),{timeout:10*(1073741821-t)-v()}),e.callbackNode=t}}}i(Ht,"Z");function vu(e,t){if(Pl=0,t)return t=un(),ga(e,t),Ht(e),null;var n=Dl(e);if(n!==0){if(t=e.callbackNode,(Ee&(Jt|an))!==ft)throw Error(h(327));if(Co(),e===Ft&&n===Ot||Nr(e,n),Ne!==null){var o=Ee;Ee|=Jt;var s=xu();do try{Wu();break}catch(g){wu(e,g)}while(!0);if(Le(),Ee=o,bl.current=s,mt===kl)throw t=Sl,Nr(e,n),Dr(e,n),Ht(e),t;if(Ne===null)switch(s=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,o=mt,Ft=null,o){case Sr:case kl:throw Error(h(345));case hu:ga(e,2<n?2:n);break;case _l:if(Dr(e,n),o=e.lastSuspendedTime,n===o&&(e.nextKnownPendingLevel=ca(s)),Mn===1073741823&&(s=la+gu-v(),10<s)){if(Tl){var f=e.lastPingedTime;if(f===0||f>=n){e.lastPingedTime=n,Nr(e,n);break}}if(f=Dl(e),f!==0&&f!==n)break;if(o!==0&&o!==n){e.lastPingedTime=o;break}e.timeoutHandle=Uo(Rr.bind(null,e),s);break}Rr(e);break;case Ml:if(Dr(e,n),o=e.lastSuspendedTime,n===o&&(e.nextKnownPendingLevel=ca(s)),Tl&&(s=e.lastPingedTime,s===0||s>=n)){e.lastPingedTime=n,Nr(e,n);break}if(s=Dl(e),s!==0&&s!==n)break;if(o!==0&&o!==n){e.lastPingedTime=o;break}if(si!==1073741823?o=10*(1073741821-si)-v():Mn===1073741823?o=0:(o=10*(1073741821-Mn)-5e3,s=v(),n=10*(1073741821-n)-s,o=s-o,0>o&&(o=0),o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*zu(o/1960))-o,n<o&&(o=n)),10<o){e.timeoutHandle=Uo(Rr.bind(null,e),o);break}Rr(e);break;case ia:if(Mn!==1073741823&&Ll!==null){f=Mn;var m=Ll;if(o=m.busyMinDurationMs|0,0>=o?o=0:(s=m.busyDelayMs|0,f=v()-(10*(1073741821-f)-(m.timeoutMs|0||5e3)),o=f<=s?0:s+o-f),10<o){Dr(e,n),e.timeoutHandle=Uo(Rr.bind(null,e),o);break}}Rr(e);break;default:throw Error(h(329))}if(Ht(e),e.callbackNode===t)return vu.bind(null,e)}}return null}i(vu,"Bj");function ua(e){var t=e.lastExpiredTime;if(t=t!==0?t:1073741823,(Ee&(Jt|an))!==ft)throw Error(h(327));if(Co(),e===Ft&&t===Ot||Nr(e,t),Ne!==null){var n=Ee;Ee|=Jt;var o=xu();do try{Uu();break}catch(s){wu(e,s)}while(!0);if(Le(),Ee=n,bl.current=o,mt===kl)throw n=Sl,Nr(e,t),Dr(e,t),Ht(e),n;if(Ne!==null)throw Error(h(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,Ft=null,Rr(e),Ht(e)}return null}i(ua,"yj");function ju(){if(Lr!==null){var e=Lr;Lr=null,e.forEach(function(t,n){ga(n,t),Ht(n)}),G()}}i(ju,"Lj");function Cu(e,t){var n=Ee;Ee|=1;try{return e(t)}finally{Ee=n,Ee===ft&&G()}}i(Cu,"Mj");function yu(e,t){var n=Ee;Ee&=-2,Ee|=oa;try{return e(t)}finally{Ee=n,Ee===ft&&G()}}i(yu,"Nj");function Nr(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ns(n)),Ne!==null)for(n=Ne.return;n!==null;){var o=n;switch(o.tag){case 1:o=o.type.childContextTypes,o!=null&&xr();break;case 3:ho(),Qe(Et),Qe(ut);break;case 5:Is(o);break;case 4:ho();break;case 13:Qe(ot);break;case 19:Qe(ot);break;case 10:et(o)}n=n.return}Ft=e,Ne=Or(e.current,null),Ot=t,mt=Sr,Sl=null,si=Mn=1073741823,Ll=null,ai=0,Tl=!1}i(Nr,"Ej");function wu(e,t){do{try{if(Le(),pl.current=wl,hl)for(var n=at.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}if(jn=0,_t=kt=at=null,hl=!1,Ne===null||Ne.return===null)return mt=kl,Sl=t,Ne=null;e:{var s=e,f=Ne.return,m=Ne,g=t;if(t=Ot,m.effectTag|=2048,m.firstEffect=m.lastEffect=null,g!==null&&typeof g=="object"&&typeof g.then=="function"){var M=g;if(!(m.mode&2)){var S=m.alternate;S?(m.updateQueue=S.updateQueue,m.memoizedState=S.memoizedState,m.expirationTime=S.expirationTime):(m.updateQueue=null,m.memoizedState=null)}var re=(ot.current&1)!==0,se=f;do{var Ie;if(Ie=se.tag===13){var We=se.memoizedState;if(We!==null)Ie=We.dehydrated!==null;else{var Wt=se.memoizedProps;Ie=Wt.fallback===void 0?!1:Wt.unstable_avoidThisFallback!==!0?!0:!re}}if(Ie){var yt=se.updateQueue;if(yt===null){var b=new Set;b.add(M),se.updateQueue=b}else yt.add(M);if(!(se.mode&2)){if(se.effectTag|=64,m.effectTag&=-2981,m.tag===1)if(m.alternate===null)m.tag=17;else{var E=Nt(1073741823,null);E.tag=2,ze(m,E)}m.expirationTime=1073741823;break e}g=void 0,m=t;var N=s.pingCache;if(N===null?(N=s.pingCache=new Bu,g=new Set,N.set(M,g)):(g=N.get(M),g===void 0&&(g=new Set,N.set(M,g))),!g.has(m)){g.add(m);var W=Ku.bind(null,s,M,m);M.then(W,W)}se.effectTag|=4096,se.expirationTime=t;break e}se=se.return}while(se!==null);g=Error((Zt(m.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`+Eo(m))}mt!==ia&&(mt=hu),g=Js(g,m),se=f;do{switch(se.tag){case 3:M=g,se.effectTag|=4096,se.expirationTime=t;var ee=fu(se,M,t);Dt(se,ee);break e;case 1:M=g;var ae=se.type,ye=se.stateNode;if(!(se.effectTag&64)&&(typeof ae.getDerivedStateFromError=="function"||ye!==null&&typeof ye.componentDidCatch=="function"&&(Wn===null||!Wn.has(ye)))){se.effectTag|=4096,se.expirationTime=t;var Ve=mu(se,M,t);Dt(se,Ve);break e}}se=se.return}while(se!==null)}Ne=ku(Ne)}catch(rt){t=rt;continue}break}while(!0)}i(wu,"Hj");function xu(){var e=bl.current;return bl.current=wl,e===null?wl:e}i(xu,"Fj");function Eu(e,t){e<Mn&&2<e&&(Mn=e),t!==null&&e<si&&2<e&&(si=e,Ll=t)}i(Eu,"Ag");function Al(e){e>ai&&(ai=e)}i(Al,"Bg");function Uu(){for(;Ne!==null;)Ne=bu(Ne)}i(Uu,"Kj");function Wu(){for(;Ne!==null&&!r();)Ne=bu(Ne)}i(Wu,"Gj");function bu(e){var t=Mu(e.alternate,e,Ot);return e.memoizedProps=e.pendingProps,t===null&&(t=ku(e)),pu.current=null,t}i(bu,"Qj");function ku(e){Ne=e;do{var t=Ne.alternate;if(e=Ne.return,Ne.effectTag&2048){if(t=Iu(Ne),t!==null)return t.effectTag&=2047,t;e!==null&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}else{if(t=Au(t,Ne,Ot),Ot===1||Ne.childExpirationTime!==1){for(var n=0,o=Ne.child;o!==null;){var s=o.expirationTime,f=o.childExpirationTime;s>n&&(n=s),f>n&&(n=f),o=o.sibling}Ne.childExpirationTime=n}if(t!==null)return t;e!==null&&!(e.effectTag&2048)&&(e.firstEffect===null&&(e.firstEffect=Ne.firstEffect),Ne.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=Ne.firstEffect),e.lastEffect=Ne.lastEffect),1<Ne.effectTag&&(e.lastEffect!==null?e.lastEffect.nextEffect=Ne:e.firstEffect=Ne,e.lastEffect=Ne))}if(t=Ne.sibling,t!==null)return t;Ne=e}while(Ne!==null);return mt===Sr&&(mt=ia),null}i(ku,"Pj");function ca(e){var t=e.expirationTime;return e=e.childExpirationTime,t>e?t:e}i(ca,"Ij");function Rr(e){var t=y();return T(99,Zu.bind(null,e,t)),null}i(Rr,"Jj");function Zu(e,t){do Co();while(ui!==null);if((Ee&(Jt|an))!==ft)throw Error(h(327));var n=e.finishedWork,o=e.finishedExpirationTime;if(n===null)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var s=ca(n);if(e.firstPendingTime=s,o<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:o<=e.firstSuspendedTime&&(e.firstSuspendedTime=o-1),o<=e.lastPingedTime&&(e.lastPingedTime=0),o<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===Ft&&(Ne=Ft=null,Ot=0),1<n.effectTag?n.lastEffect!==null?(n.lastEffect.nextEffect=n,s=n.firstEffect):s=n:s=n.firstEffect,s!==null){var f=Ee;Ee|=an,pu.current=null,dr=Ae;var m=Fi();if(Hi(m)){if("selectionStart"in m)var g={start:m.selectionStart,end:m.selectionEnd};else e:{g=(g=m.ownerDocument)&&g.defaultView||window;var M=g.getSelection&&g.getSelection();if(M&&M.rangeCount!==0){g=M.anchorNode;var S=M.anchorOffset,re=M.focusNode;M=M.focusOffset;try{g.nodeType,re.nodeType}catch{g=null;break e}var se=0,Ie=-1,We=-1,Wt=0,yt=0,b=m,E=null;t:for(;;){for(var N;b!==g||S!==0&&b.nodeType!==3||(Ie=se+S),b!==re||M!==0&&b.nodeType!==3||(We=se+M),b.nodeType===3&&(se+=b.nodeValue.length),(N=b.firstChild)!==null;)E=b,b=N;for(;;){if(b===m)break t;if(E===g&&++Wt===S&&(Ie=se),E===re&&++yt===M&&(We=se),(N=b.nextSibling)!==null)break;b=E,E=b.parentNode}b=N}g=Ie===-1||We===-1?null:{start:Ie,end:We}}else g=null}g=g||{start:0,end:0}}else g=null;zo={activeElementDetached:null,focusedElem:m,selectionRange:g},Ae=!1,me=s;do try{qu()}catch(Re){if(me===null)throw Error(h(330));Pr(me,Re),me=me.nextEffect}while(me!==null);me=s;do try{for(m=e,g=t;me!==null;){var W=me.effectTag;if(W&16&&Vt(me.stateNode,""),W&128){var ee=me.alternate;if(ee!==null){var ae=ee.ref;ae!==null&&(typeof ae=="function"?ae(null):ae.current=null)}}switch(W&1038){case 2:uu(me),me.effectTag&=-3;break;case 6:uu(me),me.effectTag&=-3,ra(me.alternate,me);break;case 1024:me.effectTag&=-1025;break;case 1028:me.effectTag&=-1025,ra(me.alternate,me);break;case 4:ra(me.alternate,me);break;case 8:S=me,cu(m,S,g),su(S)}me=me.nextEffect}}catch(Re){if(me===null)throw Error(h(330));Pr(me,Re),me=me.nextEffect}while(me!==null);if(ae=zo,ee=Fi(),W=ae.focusedElem,g=ae.selectionRange,ee!==W&&W&&W.ownerDocument&&Vo(W.ownerDocument.documentElement,W)){for(g!==null&&Hi(W)&&(ee=g.start,ae=g.end,ae===void 0&&(ae=ee),"selectionStart"in W?(W.selectionStart=ee,W.selectionEnd=Math.min(ae,W.value.length)):(ae=(ee=W.ownerDocument||document)&&ee.defaultView||window,ae.getSelection&&(ae=ae.getSelection(),S=W.textContent.length,m=Math.min(g.start,S),g=g.end===void 0?m:Math.min(g.end,S),!ae.extend&&m>g&&(S=g,g=m,m=S),S=es(W,m),re=es(W,g),S&&re&&(ae.rangeCount!==1||ae.anchorNode!==S.node||ae.anchorOffset!==S.offset||ae.focusNode!==re.node||ae.focusOffset!==re.offset)&&(ee=ee.createRange(),ee.setStart(S.node,S.offset),ae.removeAllRanges(),m>g?(ae.addRange(ee),ae.extend(re.node,re.offset)):(ee.setEnd(re.node,re.offset),ae.addRange(ee)))))),ee=[],ae=W;ae=ae.parentNode;)ae.nodeType===1&&ee.push({element:ae,left:ae.scrollLeft,top:ae.scrollTop});for(typeof W.focus=="function"&&W.focus(),W=0;W<ee.length;W++)ae=ee[W],ae.element.scrollLeft=ae.left,ae.element.scrollTop=ae.top}Ae=!!dr,zo=dr=null,e.current=n,me=s;do try{for(W=e;me!==null;){var ye=me.effectTag;if(ye&36&&Vu(W,me.alternate,me),ye&128){ee=void 0;var Ve=me.ref;if(Ve!==null){var rt=me.stateNode;switch(me.tag){case 5:ee=rt;break;default:ee=rt}typeof Ve=="function"?Ve(ee):Ve.current=ee}}me=me.nextEffect}}catch(Re){if(me===null)throw Error(h(330));Pr(me,Re),me=me.nextEffect}while(me!==null);me=null,a(),Ee=f}else e.current=n;if(Rl)Rl=!1,ui=e,ci=t;else for(me=s;me!==null;)t=me.nextEffect,me.nextEffect=null,me=t;if(t=e.firstPendingTime,t===0&&(Wn=null),t===1073741823?e===aa?di++:(di=0,aa=e):di=0,typeof da=="function"&&da(n.stateNode,o),Ht(e),Nl)throw Nl=!1,e=sa,sa=null,e;return(Ee&oa)!==ft||G(),null}i(Zu,"Sj");function qu(){for(;me!==null;){var e=me.effectTag;e&256&&$u(me.alternate,me),!(e&512)||Rl||(Rl=!0,q(97,function(){return Co(),null})),me=me.nextEffect}}i(qu,"Tj");function Co(){if(ci!==90){var e=97<ci?97:ci;return ci=90,T(e,Qu)}}i(Co,"Dj");function Qu(){if(ui===null)return!1;var e=ui;if(ui=null,(Ee&(Jt|an))!==ft)throw Error(h(331));var t=Ee;for(Ee|=an,e=e.current.firstEffect;e!==null;){try{var n=e;if(n.effectTag&512)switch(n.tag){case 0:case 11:case 15:case 22:ou(5,n),iu(5,n)}}catch(o){if(e===null)throw Error(h(330));Pr(e,o)}n=e.nextEffect,e.nextEffect=null,e=n}return Ee=t,G(),!0}i(Qu,"Vj");function _u(e,t,n){t=Js(n,t),t=fu(e,t,1073741823),ze(e,t),e=Ol(e,1073741823),e!==null&&Ht(e)}i(_u,"Wj");function Pr(e,t){if(e.tag===3)_u(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){_u(n,e,t);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wn===null||!Wn.has(o))){e=Js(t,e),e=mu(n,e,1073741823),ze(n,e),n=Ol(n,1073741823),n!==null&&Ht(n);break}}n=n.return}}i(Pr,"Ei");function Ku(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),Ft===e&&Ot===n?mt===Ml||mt===_l&&Mn===1073741823&&v()-la<gu?Nr(e,Ot):Tl=!0:Su(e,n)&&(t=e.lastPingedTime,t!==0&&t<n||(e.lastPingedTime=n,Ht(e)))}i(Ku,"Oj");function Yu(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=un(),t=Tr(t,e,null)),e=Ol(e,t),e!==null&&Ht(e)}i(Yu,"Vi");var Mu;Mu=i(function(e,t,n){var o=t.expirationTime;if(e!==null){var s=t.pendingProps;if(e.memoizedProps!==s||Et.current)sn=!0;else{if(o<n){switch(sn=!1,t.tag){case 3:Ya(t),qs();break;case 5:if(Oa(t),t.mode&4&&n!==1&&s.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:bt(t.type)&&Vn(t);break;case 4:As(t,t.stateNode.containerInfo);break;case 10:o=t.memoizedProps.value,s=t.type._context,nt(le,s._currentValue),s._currentValue=o;break;case 13:if(t.memoizedState!==null)return o=t.child.childExpirationTime,o!==0&&o>=n?Ga(e,t,n):(nt(ot,ot.current&1),t=_n(e,t,n),t!==null?t.sibling:null);nt(ot,ot.current&1);break;case 19:if(o=t.childExpirationTime>=n,e.effectTag&64){if(o)return Ja(e,t,n);t.effectTag|=64}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null),nt(ot,ot.current),!o)return null}return _n(e,t,n)}sn=!1}}else sn=!1;switch(t.expirationTime=0,t.tag){case 2:if(o=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,s=$n(t,ut.current),Ue(t,n),s=$s(null,t,o,e,s,n),t.effectTag|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,bt(o)){var f=!0;Vn(t)}else f=!1;t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ct(t);var m=o.getDerivedStateFromProps;typeof m=="function"&&ul(t,o,m,e),s.updater=cl,t.stateNode=s,s._reactInternalFiber=t,Os(t,o,e,n),t=Ks(null,t,o,!0,f,n)}else t.tag=0,It(null,t,s,n),t=t.child;return t;case 16:e:{if(s=t.elementType,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,Bl(s),s._status!==1)throw s._result;switch(s=s._result,t.type=s,f=t.tag=Ju(s),e=de(s,e),f){case 0:t=Qs(null,t,s,e,n);break e;case 1:t=Ka(null,t,s,e,n);break e;case 11:t=Wa(null,t,s,e,n);break e;case 14:t=Za(null,t,s,de(s.type,e),o,n);break e}throw Error(h(306,s,""))}return t;case 0:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:de(o,s),Qs(e,t,o,s,n);case 1:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:de(o,s),Ka(e,t,o,s,n);case 3:if(Ya(t),o=t.updateQueue,e===null||o===null)throw Error(h(282));if(o=t.pendingProps,s=t.memoizedState,s=s!==null?s.element:null,dt(e,t),zn(t,o,null,n),o=t.memoizedState.element,o===s)qs(),t=_n(e,t,n);else{if((s=t.stateNode.hydrate)&&(Un=Rn(t.stateNode.containerInfo.firstChild),kn=t,s=Mr=!0),s)for(n=Ds(t,null,o,n),t.child=n;n;)n.effectTag=n.effectTag&-3|1024,n=n.sibling;else It(e,t,o,n),qs();t=t.child}return t;case 5:return Oa(t),e===null&&Zs(t),o=t.type,s=t.pendingProps,f=e!==null?e.memoizedProps:null,m=s.children,jo(o,s)?m=null:f!==null&&jo(o,f)&&(t.effectTag|=16),Qa(e,t),t.mode&4&&n!==1&&s.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(It(e,t,m,n),t=t.child),t;case 6:return e===null&&Zs(t),null;case 13:return Ga(e,t,n);case 4:return As(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=po(t,null,o,n):It(e,t,o,n),t.child;case 11:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:de(o,s),Wa(e,t,o,s,n);case 7:return It(e,t,t.pendingProps,n),t.child;case 8:return It(e,t,t.pendingProps.children,n),t.child;case 12:return It(e,t,t.pendingProps.children,n),t.child;case 10:e:{o=t.type._context,s=t.pendingProps,m=t.memoizedProps,f=s.value;var g=t.type._context;if(nt(le,g._currentValue),g._currentValue=f,m!==null)if(g=m.value,f=Fn(g,f)?0:(typeof o._calculateChangedBits=="function"?o._calculateChangedBits(g,f):1073741823)|0,f===0){if(m.children===s.children&&!Et.current){t=_n(e,t,n);break e}}else for(g=t.child,g!==null&&(g.return=t);g!==null;){var M=g.dependencies;if(M!==null){m=g.child;for(var S=M.firstContext;S!==null;){if(S.context===o&&S.observedBits&f){g.tag===1&&(S=Nt(n,null),S.tag=2,ze(g,S)),g.expirationTime<n&&(g.expirationTime=n),S=g.alternate,S!==null&&S.expirationTime<n&&(S.expirationTime=n),we(g.return,n),M.expirationTime<n&&(M.expirationTime=n);break}S=S.next}}else m=g.tag===10&&g.type===t.type?null:g.child;if(m!==null)m.return=g;else for(m=g;m!==null;){if(m===t){m=null;break}if(g=m.sibling,g!==null){g.return=m.return,m=g;break}m=m.return}g=m}It(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,f=t.pendingProps,o=f.children,Ue(t,n),s=Ke(s,f.unstable_observedBits),o=o(s),t.effectTag|=1,It(e,t,o,n),t.child;case 14:return s=t.type,f=de(s,t.pendingProps),f=de(s.type,f),Za(e,t,s,f,o,n);case 15:return qa(e,t,t.type,t.pendingProps,o,n);case 17:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:de(o,s),e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,bt(o)?(e=!0,Vn(t)):e=!1,Ue(t,n),Na(t,o,s),Os(t,o,s,n),Ks(null,t,o,!0,e,n);case 19:return Ja(e,t,n)}throw Error(h(156,t.tag))},"Rj");var da=null,fa=null;function Gu(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);da=i(function(o){try{t.onCommitFiberRoot(n,o,void 0,(o.current.effectTag&64)===64)}catch{}},"Uj"),fa=i(function(o){try{t.onCommitFiberUnmount(n,o)}catch{}},"Li")}catch{}return!0}i(Gu,"Yj");function Xu(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}i(Xu,"Zj");function cn(e,t,n,o){return new Xu(e,t,n,o)}i(cn,"Sh");function ma(e){return e=e.prototype,!(!e||!e.isReactComponent)}i(ma,"bi");function Ju(e){if(typeof e=="function")return ma(e)?1:0;if(e!=null){if(e=e.$$typeof,e===lt)return 11;if(e===xo)return 14}return 2}i(Ju,"Xj");function Or(e,t){var n=e.alternate;return n===null?(n=cn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}i(Or,"Sg");function Il(e,t,n,o,s,f){var m=2;if(o=e,typeof e=="function")ma(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case dn:return qn(n.children,s,f,t);case Ir:m=8,s|=7;break;case pi:m=8,s|=1;break;case Ar:return e=cn(12,n,t,s|8),e.elementType=Ar,e.type=Ar,e.expirationTime=f,e;case Fr:return e=cn(13,n,t,s),e.type=Fr,e.elementType=Fr,e.expirationTime=f,e;case vi:return e=cn(19,n,t,s),e.elementType=vi,e.expirationTime=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hi:m=10;break e;case gi:m=9;break e;case lt:m=11;break e;case xo:m=14;break e;case Gn:m=16,o=null;break e;case Ci:m=22;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=cn(m,n,t,s),t.elementType=e,t.type=o,t.expirationTime=f,t}i(Il,"Ug");function qn(e,t,n,o){return e=cn(7,e,o,t),e.expirationTime=n,e}i(qn,"Wg");function pa(e,t,n){return e=cn(6,e,null,t),e.expirationTime=n,e}i(pa,"Tg");function ha(e,t,n){return t=cn(4,e.children!==null?e.children:[],e.key,t),t.expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}i(ha,"Vg");function ec(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}i(ec,"ak");function Su(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,n!==0&&n>=t&&e<=t}i(Su,"Aj");function Dr(e,t){var n=e.firstSuspendedTime,o=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(o>t||n===0)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}i(Dr,"xi");function Lu(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;n!==0&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}i(Lu,"yi");function ga(e,t){var n=e.lastExpiredTime;(n===0||n>t)&&(e.lastExpiredTime=t)}i(ga,"Cj");function Fl(e,t,n,o){var s=t.current,f=un(),m=ni.suspense;f=Tr(f,s,m);e:if(n){n=n._reactInternalFiber;t:{if(Qt(n)!==n||n.tag!==1)throw Error(h(170));var g=n;do{switch(g.tag){case 3:g=g.stateNode.context;break t;case 1:if(bt(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break t}}g=g.return}while(g!==null);throw Error(h(171))}if(n.tag===1){var M=n.type;if(bt(M)){n=sl(n,M,g);break e}}n=g}else n=on;return t.context===null?t.context=n:t.pendingContext=n,t=Nt(f,m),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),ze(s,t),Zn(s,f),f}i(Fl,"bk");function va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}i(va,"ck");function Tu(e,t){e=e.memoizedState,e!==null&&e.dehydrated!==null&&e.retryTime<t&&(e.retryTime=t)}i(Tu,"dk");function Ca(e,t){Tu(e,t),(e=e.alternate)&&Tu(e,t)}i(Ca,"ek");function ya(e,t,n){n=n!=null&&n.hydrate===!0;var o=new ec(e,t,n),s=cn(3,null,null,t===2?7:t===1?3:0);o.current=s,s.stateNode=o,ct(s),e[fr]=o.current,n&&t!==0&&Ct(e,e.nodeType===9?e:e.ownerDocument),this._internalRoot=o}i(ya,"fk"),ya.prototype.render=function(e){Fl(e,this._internalRoot,null,null)},ya.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Fl(null,e,null,function(){t[fr]=null})};function fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}i(fi,"gk");function tc(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new ya(e,0,t?{hydrate:!0}:void 0)}i(tc,"hk");function Hl(e,t,n,o,s){var f=n._reactRootContainer;if(f){var m=f._internalRoot;if(typeof s=="function"){var g=s;s=i(function(){var S=va(m);g.call(S)},"e")}Fl(t,m,e,s)}else{if(f=n._reactRootContainer=tc(n,o),m=f._internalRoot,typeof s=="function"){var M=s;s=i(function(){var S=va(m);M.call(S)},"e")}yu(function(){Fl(t,m,e,s)})}return va(m)}i(Hl,"ik");function nc(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}i(nc,"jk"),xt=i(function(e){if(e.tag===13){var t=Q(un(),150,100);Zn(e,t),Ca(e,t)}},"wc"),vt=i(function(e){e.tag===13&&(Zn(e,3),Ca(e,3))},"xc"),pn=i(function(e){if(e.tag===13){var t=un();t=Tr(t,e,null),Zn(e,t),Ca(e,t)}},"yc"),he=i(function(e,t,n){switch(t){case"input":if(Je(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var s=Zo(o);if(!s)throw Error(h(90));zl(o),Je(o,s)}}}break;case"textarea":$r(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}},"za"),Xe=Cu,pt=i(function(e,t,n,o,s){var f=Ee;Ee|=4;try{return T(98,e.bind(null,t,n,o,s))}finally{Ee=f,Ee===ft&&G()}},"Ga"),ht=i(function(){(Ee&(1|Jt|an))===ft&&(ju(),Co())},"Ha"),Mt=i(function(e,t){var n=Ee;Ee|=2;try{return e(t)}finally{Ee=n,Ee===ft&&G()}},"Ia");function Nu(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fi(t))throw Error(h(200));return nc(e,t,null,n)}i(Nu,"kk");var rc={Events:[nn,Cn,Zo,J,O,Pn,function(e){en(e,rs)},He,Ge,gn,No,Co,{current:!1}]};(function(e){var t=e.findFiberByHostInstance;return Gu(L({},e,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:i(function(n){return n=Ur(n),n===null?null:n.stateNode},"findHostInstanceByFiber"),findFiberByHostInstance:i(function(n){return t?t(n):null},"findFiberByHostInstance"),findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:mr,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"}),K=rc,K=Nu,K=i(function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternalFiber;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):Error(h(268,Object.keys(e)));return e=Ur(t),e=e===null?null:e.stateNode,e},"__webpack_unused_export__"),K=i(function(e,t){if((Ee&(Jt|an))!==ft)throw Error(h(187));var n=Ee;Ee|=1;try{return T(99,e.bind(null,t))}finally{Ee=n,G()}},"__webpack_unused_export__"),K=i(function(e,t,n){if(!fi(t))throw Error(h(200));return Hl(null,e,t,!0,n)},"__webpack_unused_export__"),k.render=function(e,t,n){if(!fi(t))throw Error(h(200));return Hl(null,e,t,!1,n)},K=i(function(e){if(!fi(e))throw Error(h(40));return e._reactRootContainer?(yu(function(){Hl(null,null,e,!1,function(){e._reactRootContainer=null,e[fr]=null})}),!0):!1},"__webpack_unused_export__"),K=Cu,K=i(function(e,t){return Nu(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)},"__webpack_unused_export__"),K=i(function(e,t,n,o){if(!fi(n))throw Error(h(200));if(e==null||e._reactInternalFiber===void 0)throw Error(h(38));return Hl(e,t,n,!1,o)},"__webpack_unused_export__"),K="16.14.0"},961:(_,k,j)=>{"use strict";function K(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K)}catch(V){console.error(V)}}i(K,"checkDCE"),K(),_.exports=j(2551)},5287:(_,k,j)=>{"use strict";/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K=j(5228),V=typeof Symbol=="function"&&Symbol.for,L=V?Symbol.for("react.element"):60103,C=V?Symbol.for("react.portal"):60106,h=V?Symbol.for("react.fragment"):60107,D=V?Symbol.for("react.strict_mode"):60108,A=V?Symbol.for("react.profiler"):60114,B=V?Symbol.for("react.provider"):60109,H=V?Symbol.for("react.context"):60110,X=V?Symbol.for("react.forward_ref"):60112,Y=V?Symbol.for("react.suspense"):60113,Pe=V?Symbol.for("react.memo"):60115,Fe=V?Symbol.for("react.lazy"):60116,pe=typeof Symbol=="function"&&Symbol.iterator;function Oe(w){for(var P="https://reactjs.org/docs/error-decoder.html?invariant="+w,ge=1;ge<arguments.length;ge++)P+="&args[]="+encodeURIComponent(arguments[ge]);return"Minified React error #"+w+"; visit "+P+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}i(Oe,"C");var it={isMounted:i(function(){return!1},"isMounted"),enqueueForceUpdate:i(function(){},"enqueueForceUpdate"),enqueueReplaceState:i(function(){},"enqueueReplaceState"),enqueueSetState:i(function(){},"enqueueSetState")},U={};function R(w,P,ge){this.props=w,this.context=P,this.refs=U,this.updater=ge||it}i(R,"F"),R.prototype.isReactComponent={},R.prototype.setState=function(w,P){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error(Oe(85));this.updater.enqueueSetState(this,w,P,"setState")},R.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function l(){}i(l,"G"),l.prototype=R.prototype;function ie(w,P,ge){this.props=w,this.context=P,this.refs=U,this.updater=ge||it}i(ie,"H");var I=ie.prototype=new l;I.constructor=ie,K(I,R.prototype),I.isPureReactComponent=!0;var Z={current:null},O=Object.prototype.hasOwnProperty,$={key:!0,ref:!0,__self:!0,__source:!0};function oe(w,P,ge){var _e,Me={},Ze=null,gt=null;if(P!=null)for(_e in P.ref!==void 0&&(gt=P.ref),P.key!==void 0&&(Ze=""+P.key),P)O.call(P,_e)&&!$.hasOwnProperty(_e)&&(Me[_e]=P[_e]);var ke=arguments.length-2;if(ke===1)Me.children=ge;else if(1<ke){for(var $e=Array(ke),Rt=0;Rt<ke;Rt++)$e[Rt]=arguments[Rt+2];Me.children=$e}if(w&&w.defaultProps)for(_e in ke=w.defaultProps,ke)Me[_e]===void 0&&(Me[_e]=ke[_e]);return{$$typeof:L,type:w,key:Ze,ref:gt,props:Me,_owner:Z.current}}i(oe,"M");function J(w,P){return{$$typeof:L,type:w.type,key:P,ref:w.ref,props:w.props,_owner:w._owner}}i(J,"N");function ue(w){return typeof w=="object"&&w!==null&&w.$$typeof===L}i(ue,"O");function he(w){var P={"=":"=0",":":"=2"};return"$"+(""+w).replace(/[=:]/g,function(ge){return P[ge]})}i(he,"escape");var ce=/\/+/g,Ce=[];function De(w,P,ge,_e){if(Ce.length){var Me=Ce.pop();return Me.result=w,Me.keyPrefix=P,Me.func=ge,Me.context=_e,Me.count=0,Me}return{result:w,keyPrefix:P,func:ge,context:_e,count:0}}i(De,"R");function He(w){w.result=null,w.keyPrefix=null,w.func=null,w.context=null,w.count=0,10>Ce.length&&Ce.push(w)}i(He,"S");function Ge(w,P,ge,_e){var Me=typeof w;(Me==="undefined"||Me==="boolean")&&(w=null);var Ze=!1;if(w===null)Ze=!0;else switch(Me){case"string":case"number":Ze=!0;break;case"object":switch(w.$$typeof){case L:case C:Ze=!0}}if(Ze)return ge(_e,w,P===""?"."+pt(w,0):P),1;if(Ze=0,P=P===""?".":P+":",Array.isArray(w))for(var gt=0;gt<w.length;gt++){Me=w[gt];var ke=P+pt(Me,gt);Ze+=Ge(Me,ke,ge,_e)}else if(w===null||typeof w!="object"?ke=null:(ke=pe&&w[pe]||w["@@iterator"],ke=typeof ke=="function"?ke:null),typeof ke=="function")for(w=ke.call(w),gt=0;!(Me=w.next()).done;)Me=Me.value,ke=P+pt(Me,gt++),Ze+=Ge(Me,ke,ge,_e);else if(Me==="object")throw ge=""+w,Error(Oe(31,ge==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":ge,""));return Ze}i(Ge,"T");function Xe(w,P,ge){return w==null?0:Ge(w,"",P,ge)}i(Xe,"V");function pt(w,P){return typeof w=="object"&&w!==null&&w.key!=null?he(w.key):P.toString(36)}i(pt,"U");function ht(w,P){w.func.call(w.context,P,w.count++)}i(ht,"W");function Mt(w,P,ge){var _e=w.result,Me=w.keyPrefix;w=w.func.call(w.context,P,w.count++),Array.isArray(w)?Be(w,_e,ge,function(Ze){return Ze}):w!=null&&(ue(w)&&(w=J(w,Me+(!w.key||P&&P.key===w.key?"":(""+w.key).replace(ce,"$&/")+"/")+ge)),_e.push(w))}i(Mt,"aa");function Be(w,P,ge,_e,Me){var Ze="";ge!=null&&(Ze=(""+ge).replace(ce,"$&/")+"/"),P=De(P,Ze,_e,Me),Xe(w,Mt,P),He(P)}i(Be,"X");var z={current:null};function ne(){var w=z.current;if(w===null)throw Error(Oe(321));return w}i(ne,"Z");var xe={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:Z,IsSomeRendererActing:{current:!1},assign:K};k.Children={map:i(function(w,P,ge){if(w==null)return w;var _e=[];return Be(w,_e,null,P,ge),_e},"map"),forEach:i(function(w,P,ge){if(w==null)return w;P=De(null,null,P,ge),Xe(w,ht,P),He(P)},"forEach"),count:i(function(w){return Xe(w,function(){return null},null)},"count"),toArray:i(function(w){var P=[];return Be(w,P,null,function(ge){return ge}),P},"toArray"),only:i(function(w){if(!ue(w))throw Error(Oe(143));return w},"only")},k.Component=R,k.Fragment=h,k.Profiler=A,k.PureComponent=ie,k.StrictMode=D,k.Suspense=Y,k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xe,k.cloneElement=function(w,P,ge){if(w==null)throw Error(Oe(267,w));var _e=K({},w.props),Me=w.key,Ze=w.ref,gt=w._owner;if(P!=null){if(P.ref!==void 0&&(Ze=P.ref,gt=Z.current),P.key!==void 0&&(Me=""+P.key),w.type&&w.type.defaultProps)var ke=w.type.defaultProps;for($e in P)O.call(P,$e)&&!$.hasOwnProperty($e)&&(_e[$e]=P[$e]===void 0&&ke!==void 0?ke[$e]:P[$e])}var $e=arguments.length-2;if($e===1)_e.children=ge;else if(1<$e){ke=Array($e);for(var Rt=0;Rt<$e;Rt++)ke[Rt]=arguments[Rt+2];_e.children=ke}return{$$typeof:L,type:w.type,key:Me,ref:Ze,props:_e,_owner:gt}},k.createContext=function(w,P){return P===void 0&&(P=null),w={$$typeof:H,_calculateChangedBits:P,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider={$$typeof:B,_context:w},w.Consumer=w},k.createElement=oe,k.createFactory=function(w){var P=oe.bind(null,w);return P.type=w,P},k.createRef=function(){return{current:null}},k.forwardRef=function(w){return{$$typeof:X,render:w}},k.isValidElement=ue,k.lazy=function(w){return{$$typeof:Fe,_ctor:w,_status:-1,_result:null}},k.memo=function(w,P){return{$$typeof:Pe,type:w,compare:P===void 0?null:P}},k.useCallback=function(w,P){return ne().useCallback(w,P)},k.useContext=function(w,P){return ne().useContext(w,P)},k.useDebugValue=function(){},k.useEffect=function(w,P){return ne().useEffect(w,P)},k.useImperativeHandle=function(w,P,ge){return ne().useImperativeHandle(w,P,ge)},k.useLayoutEffect=function(w,P){return ne().useLayoutEffect(w,P)},k.useMemo=function(w,P){return ne().useMemo(w,P)},k.useReducer=function(w,P,ge){return ne().useReducer(w,P,ge)},k.useRef=function(w){return ne().useRef(w)},k.useState=function(w){return ne().useState(w)},k.version="16.14.0"},6540:(_,k,j)=>{"use strict";_.exports=j(5287)},7463:(_,k)=>{"use strict";/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j,K,V,L,C;if(typeof window=="undefined"||typeof MessageChannel!="function"){var h=null,D=null,A=i(function(){if(h!==null)try{var z=k.unstable_now();h(!0,z),h=null}catch(ne){throw setTimeout(A,0),ne}},"t"),B=Date.now();k.unstable_now=function(){return Date.now()-B},j=i(function(z){h!==null?setTimeout(j,0,z):(h=z,setTimeout(A,0))},"f"),K=i(function(z,ne){D=setTimeout(z,ne)},"g"),V=i(function(){clearTimeout(D)},"h"),L=i(function(){return!1},"k"),C=k.unstable_forceFrameRate=function(){}}else{var H=window.performance,X=window.Date,Y=window.setTimeout,Pe=window.clearTimeout;if(typeof console!="undefined"){var Fe=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),typeof Fe!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if(typeof H=="object"&&typeof H.now=="function")k.unstable_now=function(){return H.now()};else{var pe=X.now();k.unstable_now=function(){return X.now()-pe}}var Oe=!1,it=null,U=-1,R=5,l=0;L=i(function(){return k.unstable_now()>=l},"k"),C=i(function(){},"l"),k.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):R=0<z?Math.floor(1e3/z):5};var ie=new MessageChannel,I=ie.port2;ie.port1.onmessage=function(){if(it!==null){var z=k.unstable_now();l=z+R;try{it(!0,z)?I.postMessage(null):(Oe=!1,it=null)}catch(ne){throw I.postMessage(null),ne}}else Oe=!1},j=i(function(z){it=z,Oe||(Oe=!0,I.postMessage(null))},"f"),K=i(function(z,ne){U=Y(function(){z(k.unstable_now())},ne)},"g"),V=i(function(){Pe(U),U=-1},"h")}function Z(z,ne){var xe=z.length;z.push(ne);e:for(;;){var w=xe-1>>>1,P=z[w];if(P!==void 0&&0<oe(P,ne))z[w]=ne,z[xe]=P,xe=w;else break e}}i(Z,"J");function O(z){return z=z[0],z===void 0?null:z}i(O,"L");function $(z){var ne=z[0];if(ne!==void 0){var xe=z.pop();if(xe!==ne){z[0]=xe;e:for(var w=0,P=z.length;w<P;){var ge=2*(w+1)-1,_e=z[ge],Me=ge+1,Ze=z[Me];if(_e!==void 0&&0>oe(_e,xe))Ze!==void 0&&0>oe(Ze,_e)?(z[w]=Ze,z[Me]=xe,w=Me):(z[w]=_e,z[ge]=xe,w=ge);else if(Ze!==void 0&&0>oe(Ze,xe))z[w]=Ze,z[Me]=xe,w=Me;else break e}}return ne}return null}i($,"M");function oe(z,ne){var xe=z.sortIndex-ne.sortIndex;return xe!==0?xe:z.id-ne.id}i(oe,"K");var J=[],ue=[],he=1,ce=null,Ce=3,De=!1,He=!1,Ge=!1;function Xe(z){for(var ne=O(ue);ne!==null;){if(ne.callback===null)$(ue);else if(ne.startTime<=z)$(ue),ne.sortIndex=ne.expirationTime,Z(J,ne);else break;ne=O(ue)}}i(Xe,"V");function pt(z){if(Ge=!1,Xe(z),!He)if(O(J)!==null)He=!0,j(ht);else{var ne=O(ue);ne!==null&&K(pt,ne.startTime-z)}}i(pt,"W");function ht(z,ne){He=!1,Ge&&(Ge=!1,V()),De=!0;var xe=Ce;try{for(Xe(ne),ce=O(J);ce!==null&&(!(ce.expirationTime>ne)||z&&!L());){var w=ce.callback;if(w!==null){ce.callback=null,Ce=ce.priorityLevel;var P=w(ce.expirationTime<=ne);ne=k.unstable_now(),typeof P=="function"?ce.callback=P:ce===O(J)&&$(J),Xe(ne)}else $(J);ce=O(J)}if(ce!==null)var ge=!0;else{var _e=O(ue);_e!==null&&K(pt,_e.startTime-ne),ge=!1}return ge}finally{ce=null,Ce=xe,De=!1}}i(ht,"X");function Mt(z){switch(z){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}i(Mt,"Y");var Be=C;k.unstable_IdlePriority=5,k.unstable_ImmediatePriority=1,k.unstable_LowPriority=4,k.unstable_NormalPriority=3,k.unstable_Profiling=null,k.unstable_UserBlockingPriority=2,k.unstable_cancelCallback=function(z){z.callback=null},k.unstable_continueExecution=function(){He||De||(He=!0,j(ht))},k.unstable_getCurrentPriorityLevel=function(){return Ce},k.unstable_getFirstCallbackNode=function(){return O(J)},k.unstable_next=function(z){switch(Ce){case 1:case 2:case 3:var ne=3;break;default:ne=Ce}var xe=Ce;Ce=ne;try{return z()}finally{Ce=xe}},k.unstable_pauseExecution=function(){},k.unstable_requestPaint=Be,k.unstable_runWithPriority=function(z,ne){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var xe=Ce;Ce=z;try{return ne()}finally{Ce=xe}},k.unstable_scheduleCallback=function(z,ne,xe){var w=k.unstable_now();if(typeof xe=="object"&&xe!==null){var P=xe.delay;P=typeof P=="number"&&0<P?w+P:w,xe=typeof xe.timeout=="number"?xe.timeout:Mt(z)}else xe=Mt(z),P=w;return xe=P+xe,z={id:he++,callback:ne,priorityLevel:z,startTime:P,expirationTime:xe,sortIndex:-1},P>w?(z.sortIndex=P,Z(ue,z),O(J)===null&&z===O(ue)&&(Ge?V():Ge=!0,K(pt,P-w))):(z.sortIndex=xe,Z(J,z),He||De||(He=!0,j(ht))),z},k.unstable_shouldYield=function(){var z=k.unstable_now();Xe(z);var ne=O(J);return ne!==ce&&ce!==null&&ne!==null&&ne.callback!==null&&ne.startTime<=z&&ne.expirationTime<ce.expirationTime||L()},k.unstable_wrapCallback=function(z){var ne=Ce;return function(){var xe=Ce;Ce=ne;try{return z.apply(this,arguments)}finally{Ce=xe}}}},9982:(_,k,j)=>{"use strict";_.exports=j(7463)},5072:_=>{"use strict";var k=[];function j(L){for(var C=-1,h=0;h<k.length;h++)if(k[h].identifier===L){C=h;break}return C}i(j,"getIndexByIdentifier");function K(L,C){for(var h={},D=[],A=0;A<L.length;A++){var B=L[A],H=C.base?B[0]+C.base:B[0],X=h[H]||0,Y="".concat(H," ").concat(X);h[H]=X+1;var Pe=j(Y),Fe={css:B[1],media:B[2],sourceMap:B[3],supports:B[4],layer:B[5]};if(Pe!==-1)k[Pe].references++,k[Pe].updater(Fe);else{var pe=V(Fe,C);C.byIndex=A,k.splice(A,0,{identifier:Y,updater:pe,references:1})}D.push(Y)}return D}i(K,"modulesToDom");function V(L,C){var h=C.domAPI(C);h.update(L);var D=i(function(B){if(B){if(B.css===L.css&&B.media===L.media&&B.sourceMap===L.sourceMap&&B.supports===L.supports&&B.layer===L.layer)return;h.update(L=B)}else h.remove()},"updater");return D}i(V,"addElementStyle"),_.exports=function(L,C){C=C||{},L=L||[];var h=K(L,C);return i(function(A){A=A||[];for(var B=0;B<h.length;B++){var H=h[B],X=j(H);k[X].references--}for(var Y=K(A,C),Pe=0;Pe<h.length;Pe++){var Fe=h[Pe],pe=j(Fe);k[pe].references===0&&(k[pe].updater(),k.splice(pe,1))}h=Y},"update")}},7659:_=>{"use strict";var k={};function j(V){if(typeof k[V]=="undefined"){var L=document.querySelector(V);if(window.HTMLIFrameElement&&L instanceof window.HTMLIFrameElement)try{L=L.contentDocument.head}catch{L=null}k[V]=L}return k[V]}i(j,"getTarget");function K(V,L){var C=j(V);if(!C)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");C.appendChild(L)}i(K,"insertBySelector"),_.exports=K},540:_=>{"use strict";function k(j){var K=document.createElement("style");return j.setAttributes(K,j.attributes),j.insert(K,j.options),K}i(k,"insertStyleElement"),_.exports=k},5056:(_,k,j)=>{"use strict";function K(V){var L=j.nc;L&&V.setAttribute("nonce",L)}i(K,"setAttributesWithoutAttributes"),_.exports=K},7825:_=>{"use strict";function k(V,L,C){var h="";C.supports&&(h+="@supports (".concat(C.supports,") {")),C.media&&(h+="@media ".concat(C.media," {"));var D=typeof C.layer!="undefined";D&&(h+="@layer".concat(C.layer.length>0?" ".concat(C.layer):""," {")),h+=C.css,D&&(h+="}"),C.media&&(h+="}"),C.supports&&(h+="}");var A=C.sourceMap;A&&typeof btoa!="undefined"&&(h+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),L.styleTagTransform(h,V,L.options)}i(k,"apply");function j(V){if(V.parentNode===null)return!1;V.parentNode.removeChild(V)}i(j,"removeStyleElement");function K(V){if(typeof document=="undefined")return{update:i(function(){},"update"),remove:i(function(){},"remove")};var L=V.insertStyleElement(V);return{update:i(function(h){k(L,V,h)},"update"),remove:i(function(){j(L)},"remove")}}i(K,"domAPI"),_.exports=K},1113:_=>{"use strict";function k(j,K){if(K.styleSheet)K.styleSheet.cssText=j;else{for(;K.firstChild;)K.removeChild(K.firstChild);K.appendChild(document.createTextNode(j))}}i(k,"styleTagTransform"),_.exports=k},7290:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M8 2C4.686 2 2 4.686 2 8C2 11.314 4.686 14 8 14C11.314 14 14 11.314 14 8C14 4.686 11.314 2 8 2ZM1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8ZM8 12.25C9.933 12.25 11.5 11.036 11.5 9.214C11.5 8.543 10.956 8 10.286 8H5.715C5.044 8 4.501 8.544 4.501 9.214C4.501 11.035 6.068 12.25 8.001 12.25H8ZM8 7.25C9.036 7.25 9.875 6.411 9.875 5.375C9.875 4.339 9.036 3.5 8 3.5C6.964 3.5 6.125 4.339 6.125 5.375C6.125 6.411 6.964 7.25 8 7.25Z"></path></svg>'},5898:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M8 1.5C8 1.22386 7.77614 1 7.5 1C7.22386 1 7 1.22386 7 1.5V7H1.5C1.22386 7 1 7.22386 1 7.5C1 7.77614 1.22386 8 1.5 8H7V13.5C7 13.7761 7.22386 14 7.5 14C7.77614 14 8 13.7761 8 13.5V8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H8V1.5Z"></path></svg>'},8945:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12.354 3.646C12.159 3.451 11.842 3.451 11.647 3.646L6.70798 8.585L7.41498 9.292L12.354 4.353C12.549 4.158 12.549 3.841 12.354 3.646ZM1.85398 8.146C1.65898 7.951 1.34198 7.951 1.14698 8.146C0.951982 8.341 0.951982 8.658 1.14698 8.853L4.14698 11.853C4.24498 11.951 4.37298 11.999 4.50098 11.999C4.62898 11.999 4.75698 11.95 4.85498 11.853L5.20898 11.499L4.50198 10.792L1.85598 8.146H1.85398ZM7.49998 12C7.37198 12 7.24398 11.951 7.14598 11.854L4.14598 8.854C3.95098 8.659 3.95098 8.342 4.14598 8.147C4.34098 7.952 4.65798 7.952 4.85298 8.147L7.49898 10.793L14.645 3.647C14.84 3.452 15.157 3.452 15.352 3.647C15.547 3.842 15.547 4.159 15.352 4.354L7.85198 11.854C7.75398 11.952 7.62598 12 7.49798 12H7.49998Z"></path></svg>'},2631:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13.6572 3.13573C13.8583 2.9465 14.175 2.95614 14.3643 3.15722C14.5535 3.35831 14.5438 3.675 14.3428 3.86425L5.84277 11.8642C5.64597 12.0494 5.33756 12.0446 5.14648 11.8535L1.64648 8.35351C1.45121 8.15824 1.45121 7.84174 1.64648 7.64647C1.84174 7.45121 2.15825 7.45121 2.35351 7.64647L5.50976 10.8027L13.6572 3.13573Z"></path></svg>'},8251:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z"></path></svg>'},8674:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M8 4C8.36719 4 8.72135 4.04818 9.0625 4.14453C9.40365 4.23828 9.72135 4.3724 10.0156 4.54688C10.3125 4.72135 10.582 4.93099 10.8242 5.17578C11.069 5.41797 11.2786 5.6875 11.4531 5.98438C11.6276 6.27865 11.7617 6.59635 11.8555 6.9375C11.9518 7.27865 12 7.63281 12 8C12 8.36719 11.9518 8.72135 11.8555 9.0625C11.7617 9.40365 11.6276 9.72266 11.4531 10.0195C11.2786 10.3138 11.069 10.5833 10.8242 10.8281C10.582 11.0703 10.3125 11.2786 10.0156 11.4531C9.72135 11.6276 9.40365 11.763 9.0625 11.8594C8.72135 11.9531 8.36719 12 8 12C7.63281 12 7.27865 11.9531 6.9375 11.8594C6.59635 11.763 6.27734 11.6276 5.98047 11.4531C5.6862 11.2786 5.41667 11.0703 5.17188 10.8281C4.92969 10.5833 4.72135 10.3138 4.54688 10.0195C4.3724 9.72266 4.23698 9.40365 4.14062 9.0625C4.04688 8.72135 4 8.36719 4 8C4 7.63281 4.04688 7.27865 4.14062 6.9375C4.23698 6.59635 4.3724 6.27865 4.54688 5.98438C4.72135 5.6875 4.92969 5.41797 5.17188 5.17578C5.41667 4.93099 5.6862 4.72135 5.98047 4.54688C6.27734 4.3724 6.59635 4.23828 6.9375 4.14453C7.27865 4.04818 7.63281 4 8 4Z"></path></svg>'},1019:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M8.70701 8.00001L12.353 4.35401C12.548 4.15901 12.548 3.84201 12.353 3.64701C12.158 3.45201 11.841 3.45201 11.646 3.64701L8.00001 7.29301L4.35401 3.64701C4.15901 3.45201 3.84201 3.45201 3.64701 3.64701C3.45201 3.84201 3.45201 4.15901 3.64701 4.35401L7.29301 8.00001L3.64701 11.646C3.45201 11.841 3.45201 12.158 3.64701 12.353C3.74501 12.451 3.87301 12.499 4.00101 12.499C4.12901 12.499 4.25701 12.45 4.35501 12.353L8.00101 8.70701L11.647 12.353C11.745 12.451 11.873 12.499 12.001 12.499C12.129 12.499 12.257 12.45 12.355 12.353C12.55 12.158 12.55 11.841 12.355 11.646L8.70901 8.00001H8.70701Z"></path></svg>'},7548:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M1 4.5C1 3.11929 2.11929 2 3.5 2H12.5C13.8807 2 15 3.11929 15 4.5V9.5C15 10.8807 13.8807 12 12.5 12H8.68787L5.62533 14.6797C4.99168 15.2342 4 14.7842 4 13.9422V12H3.5C2.11929 12 1 10.8807 1 9.5V4.5ZM3.5 3C2.67157 3 2 3.67157 2 4.5V9.5C2 10.3284 2.67157 11 3.5 11H5V13.8981L8.31213 11H12.5C13.3284 11 14 10.3284 14 9.5V4.5C14 3.67157 13.3284 3 12.5 3H3.5Z"></path></svg>'},5787:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M6.25 9.03699C6.664 9.03699 6.99999 9.373 7 9.78699V11.288C7 11.702 6.664 12.038 6.25 12.038C5.836 12.038 5.5 11.702 5.5 11.288V9.78699C5.50001 9.373 5.836 9.03699 6.25 9.03699Z"></path><path d="M9.75 9.03699C10.164 9.03699 10.5 9.373 10.5 9.78699V11.288C10.5 11.702 10.164 12.038 9.75 12.038C9.336 12.038 9 11.702 9 11.288V9.78699C9.00001 9.373 9.336 9.03699 9.75 9.03699Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.13867 1.80652C8.82067 1.07559 9.87705 0.907879 11.083 1.04187C12.3128 1.17885 13.2276 1.56987 13.8066 2.30261C14.3726 3.01761 14.5 3.91699 14.5 4.78699C14.5 5.35899 14.4471 5.93524 14.2461 6.44324C14.312 6.67097 14.3441 6.87174 14.3721 7.05457C14.3841 7.13057 14.3962 7.20332 14.4092 7.27332C15.333 7.65842 15.931 8.74411 16 9.36804V11.2401C15.9996 12.0063 12.6487 15.035 7.99805 15.035C3.43611 15.035 0.125083 12.1211 0 11.286V9.33777C0.0850941 8.7098 0.67711 7.65235 1.58789 7.27332C1.60089 7.20332 1.61202 7.12957 1.62402 7.05457C1.65299 6.87174 1.6841 6.67097 1.75 6.44324C1.549 5.93524 1.49609 5.35899 1.49609 4.78699C1.49609 3.91699 1.62445 3.01761 2.18945 2.30261C2.76847 1.5699 3.68333 1.17884 4.91309 1.04187C6.11903 0.907894 7.17544 1.07557 7.85742 1.80652C7.90736 1.85945 7.95314 1.91464 7.99609 1.97156C8.04004 1.91467 8.08976 1.85943 8.13867 1.80652ZM8 6.30261C7.85503 6.57456 7.672 6.82481 7.45605 7.04578C6.80607 7.70976 5.89305 8.03697 4.74609 8.03699C4.09409 8.03699 3.50955 7.95597 3.01855 7.74597L2.99609 7.86219V12.1171C3.41537 12.4402 5.71823 13.5497 7.99805 13.5497C10.278 13.5497 12.5819 12.4401 13 12.1171V7.86219L12.9766 7.74597C12.4866 7.95586 11.9018 8.03699 11.25 8.03699C10.104 8.03699 9.19104 7.70978 8.54004 7.04578C8.32508 6.8248 8.14398 6.57458 8 6.30261ZM6.76172 2.82996C6.56865 2.62401 6.12477 2.41713 5.08008 2.53308C4.06108 2.64608 3.60119 2.93728 3.36719 3.23328C3.12024 3.54528 2.99805 4.02207 2.99805 4.78699C2.99805 5.57984 3.12672 5.95806 3.30566 6.15808C3.46766 6.33908 3.82505 6.53699 4.74805 6.53699C5.60091 6.53698 6.08674 6.30189 6.38574 5.99695C6.70071 5.67499 6.91291 5.17009 7.00293 4.44422C7.11993 3.50922 6.96572 3.04896 6.76172 2.82996ZM10.917 2.53308C9.87329 2.41712 9.42942 2.62402 9.23633 2.82996C9.03233 3.04896 8.87714 3.50922 8.99414 4.44422C9.08516 5.17008 9.29734 5.67499 9.6123 5.99695C9.91132 6.30188 10.3961 6.53699 11.25 6.53699C12.172 6.53699 12.5304 6.33908 12.6924 6.15808C12.8713 5.95805 13 5.57981 13 4.78699C13 4.02209 12.8768 3.54528 12.6299 3.23328C12.3969 2.93728 11.937 2.64608 10.917 2.53308Z"></path></svg>'},6270:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M3 5V12.73C2.4 12.38 2 11.74 2 11V5C2 2.79 3.79 1 6 1H9C9.74 1 10.38 1.4 10.73 2H6C4.35 2 3 3.35 3 5ZM11 15H6C4.897 15 4 14.103 4 13V5C4 3.897 4.897 3 6 3H11C12.103 3 13 3.897 13 5V13C13 14.103 12.103 15 11 15ZM12 5C12 4.448 11.552 4 11 4H6C5.448 4 5 4.448 5 5V13C5 13.552 5.448 14 6 14H11C11.552 14 12 13.552 12 13V5Z"></path></svg>'},4837:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M14.236 1.76386C13.2123 0.740172 11.5525 0.740171 10.5289 1.76386L2.65722 9.63549C2.28304 10.0097 2.01623 10.4775 1.88467 10.99L1.01571 14.3755C0.971767 14.5467 1.02148 14.7284 1.14646 14.8534C1.27144 14.9783 1.45312 15.028 1.62432 14.9841L5.00978 14.1151C5.52234 13.9836 5.99015 13.7168 6.36433 13.3426L14.236 5.47097C15.2596 4.44728 15.2596 2.78755 14.236 1.76386ZM11.236 2.47097C11.8691 1.8378 12.8957 1.8378 13.5288 2.47097C14.162 3.10413 14.162 4.1307 13.5288 4.76386L12.75 5.54269L10.4571 3.24979L11.236 2.47097ZM9.75002 3.9569L12.0429 6.24979L5.65722 12.6355C5.40969 12.883 5.10023 13.0595 4.76117 13.1465L2.19447 13.8053L2.85327 11.2386C2.9403 10.8996 3.1168 10.5901 3.36433 10.3426L9.75002 3.9569Z"></path></svg>'},5473:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M8 1C4.14 1 1 4.14 1 8C1 11.86 4.14 15 8 15C11.86 15 15 11.86 15 8C15 4.14 11.86 1 8 1ZM8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14ZM10.854 5.854L8.708 8L10.854 10.146C11.049 10.341 11.049 10.658 10.854 10.853C10.756 10.951 10.628 10.999 10.5 10.999C10.372 10.999 10.244 10.95 10.146 10.853L8 8.707L5.854 10.853C5.756 10.951 5.628 10.999 5.5 10.999C5.372 10.999 5.244 10.95 5.146 10.853C4.951 10.658 4.951 10.341 5.146 10.146L7.292 8L5.146 5.854C4.951 5.659 4.951 5.342 5.146 5.147C5.341 4.952 5.658 4.952 5.853 5.147L7.999 7.293L10.145 5.147C10.34 4.952 10.657 4.952 10.852 5.147C11.047 5.342 11.047 5.659 10.852 5.854H10.854Z"></path></svg>'},1456:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M9.5 1C8.67157 1 8 1.67157 8 2.5V4.5C8 5.15293 8.41717 5.70842 8.99951 5.91447V7C8.99951 7.19401 9.11174 7.3705 9.28743 7.45279C9.46313 7.53508 9.67056 7.50831 9.8196 7.38411L11.4805 6H13.5C14.3284 6 15 5.32843 15 4.5V2.5C15 1.67157 14.3284 1 13.5 1H9.5ZM9 2.5C9 2.22386 9.22386 2 9.5 2H13.5C13.7761 2 14 2.22386 14 2.5V4.5C14 4.77614 13.7761 5 13.5 5H11.2995C11.1825 5 11.0693 5.04101 10.9794 5.11589L9.99951 5.93248V5.5C9.99951 5.22395 9.7758 5.00013 9.49975 5C9.22373 4.99987 9 4.77606 9 4.5V2.5ZM3 6C3 4.89543 3.89543 4 5 4C6.10457 4 7 4.89543 7 6C7 7.10457 6.10457 8 5 8C3.89543 8 3 7.10457 3 6ZM5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7C5.55228 7 6 6.55228 6 6C6 5.44772 5.55228 5 5 5ZM2.49998 9L7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.6161 8.54103 12.5103 7.78785 13.1148C7.04658 13.7098 6.05308 14 5 14C3.94692 14 2.95342 13.7098 2.21215 13.1148C1.45897 12.5103 1 11.6161 1 10.5C1 9.67161 1.67156 9 2.49998 9ZM7.5 10L2.49998 10C2.22387 10 2 10.2239 2 10.5C2 11.3169 2.32453 11.9227 2.8381 12.3349C3.36358 12.7567 4.12008 13 5 13C5.87992 13 6.63642 12.7567 7.1619 12.3349C7.67547 11.9227 8 11.3169 8 10.5C8 10.2239 7.77614 10 7.5 10Z"></path></svg>'},979:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11.5 8C11.5 6.24 10.194 4.779 8.5 4.536V1.5C8.5 1.224 8.276 1 8 1C7.724 1 7.5 1.224 7.5 1.5V4.536C5.806 4.779 4.5 6.24 4.5 8C4.5 9.76 5.806 11.221 7.5 11.464V14.5C7.5 14.776 7.724 15 8 15C8.276 15 8.5 14.776 8.5 14.5V11.464C10.194 11.221 11.5 9.76 11.5 8ZM8 10.5C6.621 10.5 5.5 9.378 5.5 8C5.5 6.622 6.621 5.5 8 5.5C9.379 5.5 10.5 6.622 10.5 8C10.5 9.378 9.379 10.5 8 10.5Z"></path></svg>'},425:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M9.14645 5.85355C9.34171 6.04882 9.65829 6.04882 9.85355 5.85355C10.0488 5.65829 10.0488 5.34171 9.85355 5.14645L8.70711 4H10.5C11.3284 4 12 4.67157 12 5.5V10.05C10.8589 10.2816 10 11.2905 10 12.5C10 13.8807 11.1193 15 12.5 15C13.8807 15 15 13.8807 15 12.5C15 11.2905 14.1411 10.2816 13 10.05V5.5C13 4.11929 11.8807 3 10.5 3H8.70711L9.85355 1.85355C10.0488 1.65829 10.0488 1.34171 9.85355 1.14645C9.65829 0.951184 9.34171 0.951184 9.14645 1.14645L7.14645 3.14645C6.95118 3.34171 6.95118 3.65829 7.14645 3.85355L9.14645 5.85355ZM14 12.5C14 13.3284 13.3284 14 12.5 14C11.6716 14 11 13.3284 11 12.5C11 11.6716 11.6716 11 12.5 11C13.3284 11 14 11.6716 14 12.5ZM6 3.5C6 4.70948 5.14112 5.71836 4 5.94999V10.5C4 11.3284 4.67157 12 5.5 12H7.29289L6.14645 10.8536C5.95118 10.6583 5.95118 10.3417 6.14645 10.1464C6.34171 9.95118 6.65829 9.95118 6.85355 10.1464L8.85355 12.1464C9.04882 12.3417 9.04882 12.6583 8.85355 12.8536L6.85355 14.8536C6.65829 15.0488 6.34171 15.0488 6.14645 14.8536C5.95118 14.6583 5.95118 14.3417 6.14645 14.1464L7.29289 13H5.5C4.11929 13 3 11.8807 3 10.5V5.94999C1.85888 5.71836 1 4.70948 1 3.5C1 2.11929 2.11929 1 3.5 1C4.88071 1 6 2.11929 6 3.5ZM5 3.5C5 2.67157 4.32843 2 3.5 2C2.67157 2 2 2.67157 2 3.5C2 4.32843 2.67157 5 3.5 5C4.32843 5 5 4.32843 5 3.5Z"></path></svg>'},2400:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11.5 5.99998C10.9265 6.00006 10.3704 6.19736 9.92505 6.55877C9.47971 6.92018 9.17217 7.42373 9.05402 7.98498C7.17202 7.85998 5.46602 6.96298 5.08102 5.93098C5.67998 5.78724 6.20478 5.42744 6.55479 4.92058C6.9048 4.41373 7.05538 3.7955 6.97763 3.18446C6.89989 2.57343 6.5993 2.0126 6.13352 1.60954C5.66774 1.20648 5.06956 0.989562 4.45369 1.00039C3.83782 1.01121 3.24763 1.24902 2.7963 1.6682C2.34497 2.08738 2.06428 2.65842 2.00806 3.27181C1.95184 3.8852 2.12404 4.49776 2.49165 4.992C2.85925 5.48624 3.39638 5.82737 4.00002 5.94998V10.05C3.393 10.1739 2.85361 10.5188 2.48642 11.0178C2.11923 11.5168 1.95041 12.1343 2.01268 12.7507C2.07495 13.3671 2.36387 13.9385 2.82344 14.3539C3.28301 14.7694 3.88048 14.9995 4.50002 14.9995C5.11956 14.9995 5.71703 14.7694 6.1766 14.3539C6.63616 13.9385 6.92509 13.3671 6.98736 12.7507C7.04963 12.1343 6.88081 11.5168 6.51362 11.0178C6.14643 10.5188 5.60704 10.1739 5.00002 10.05V7.46598C6.15462 8.38805 7.57188 8.92022 9.04802 8.98598C9.1401 9.4506 9.36227 9.8795 9.68867 10.2227C10.0151 10.566 10.4323 10.8094 10.8917 10.9248C11.3511 11.0401 11.8338 11.0225 12.2836 10.8741C12.7334 10.7257 13.1318 10.4526 13.4324 10.0865C13.733 9.72047 13.9234 9.27655 13.9815 8.80647C14.0395 8.33639 13.9629 7.85948 13.7604 7.43128C13.5579 7.00308 13.238 6.64122 12.8378 6.38782C12.4376 6.13442 11.9737 5.99992 11.5 5.99998ZM3.00002 3.49998C3.00002 3.20331 3.08799 2.9133 3.25282 2.66662C3.41764 2.41995 3.65191 2.22769 3.92599 2.11416C4.20008 2.00063 4.50168 1.97092 4.79265 2.0288C5.08363 2.08668 5.3509 2.22954 5.56068 2.43932C5.77046 2.6491 5.91332 2.91637 5.9712 3.20734C6.02908 3.49831 5.99937 3.79991 5.88584 4.074C5.77231 4.34809 5.58005 4.58236 5.33337 4.74718C5.0867 4.912 4.79669 4.99998 4.50002 4.99998C4.10219 4.99998 3.72066 4.84194 3.43936 4.56064C3.15805 4.27933 3.00002 3.8978 3.00002 3.49998ZM6.00002 12.5C6.00002 12.7966 5.91205 13.0867 5.74722 13.3333C5.5824 13.58 5.34813 13.7723 5.07404 13.8858C4.79996 13.9993 4.49836 14.029 4.20738 13.9712C3.91641 13.9133 3.64914 13.7704 3.43936 13.5606C3.22958 13.3509 3.08672 13.0836 3.02884 12.7926C2.97096 12.5016 3.00067 12.2 3.1142 11.926C3.22773 11.6519 3.41999 11.4176 3.66666 11.2528C3.91334 11.088 4.20335 11 4.50002 11C4.89784 11 5.27938 11.158 5.56068 11.4393C5.84198 11.7206 6.00002 12.1022 6.00002 12.5ZM11.5 9.99998C11.2033 9.99998 10.9133 9.91201 10.6667 9.74718C10.42 9.58236 10.2277 9.34809 10.1142 9.074C10.0007 8.79991 9.97096 8.49831 10.0288 8.20734C10.0867 7.91637 10.2296 7.6491 10.4394 7.43932C10.6491 7.22954 10.9164 7.08668 11.2074 7.0288C11.4984 6.97092 11.8 7.00063 12.074 7.11416C12.3481 7.22769 12.5824 7.41995 12.7472 7.66662C12.912 7.9133 13 8.20331 13 8.49998C13 8.8978 12.842 9.27933 12.5607 9.56064C12.2794 9.84194 11.8978 9.99998 11.5 9.99998Z"></path></svg>'},9494:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13 10.05V7.5C13 7.224 12.776 7 12.5 7C12.224 7 12 7.224 12 7.5V10.05C10.86 10.282 10 11.292 10 12.5C10 13.879 11.122 15 12.5 15C13.878 15 15 13.879 15 12.5C15 11.292 14.14 10.283 13 10.05ZM12.5 14C11.673 14 11 13.327 11 12.5C11 11.673 11.673 11 12.5 11C13.327 11 14 11.673 14 12.5C14 13.327 13.327 14 12.5 14ZM6 3.5C6 2.12 4.88 1 3.5 1C2.12 1 1 2.12 1 3.5C1 4.71 1.86 5.72 3 5.95V10.051C1.86 10.283 1 11.293 1 12.5C1 13.879 2.122 15 3.5 15C4.878 15 6 13.879 6 12.5C6 11.292 5.14 10.283 4 10.051V5.95C5.14 5.72 6 4.71 6 3.5ZM5 12.5C5 13.327 4.327 14 3.5 14C2.673 14 2 13.327 2 12.5C2 11.673 2.673 11 3.5 11C4.327 11 5 11.673 5 12.5ZM3.5 5C2.67 5 2 4.33 2 3.5C2 2.67 2.67 2 3.5 2C4.33 2 5 2.67 5 3.5C5 4.33 4.33 5 3.5 5ZM10.646 4.646L11.792 3.5L10.646 2.354C10.451 2.159 10.451 1.842 10.646 1.647C10.841 1.452 11.158 1.452 11.353 1.647L12.499 2.793L13.645 1.647C13.84 1.452 14.157 1.452 14.352 1.647C14.547 1.842 14.547 2.159 14.352 2.354L13.206 3.5L14.352 4.646C14.547 4.841 14.547 5.158 14.352 5.353C14.254 5.451 14.126 5.499 13.998 5.499C13.87 5.499 13.742 5.45 13.644 5.353L12.498 4.207L11.352 5.353C11.254 5.451 11.126 5.499 10.998 5.499C10.87 5.499 10.742 5.45 10.644 5.353C10.449 5.158 10.449 4.841 10.644 4.646H10.646Z"></path></svg>'},4551:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M6 3.5C6 2.12 4.88 1 3.5 1C2.12 1 1 2.12 1 3.5C1 4.71 1.86 5.72 3 5.95V10.051C1.86 10.283 1 11.293 1 12.5C1 13.879 2.122 15 3.5 15C4.878 15 6 13.879 6 12.5C6 11.292 5.14 10.283 4 10.051V5.95C5.14 5.72 6 4.71 6 3.5ZM5 12.5C5 13.327 4.327 14 3.5 14C2.673 14 2 13.327 2 12.5C2 11.673 2.673 11 3.5 11C4.327 11 5 11.673 5 12.5ZM3.5 5C2.67 5 2 4.33 2 3.5C2 2.67 2.67 2 3.5 2C4.33 2 5 2.67 5 3.5C5 4.33 4.33 5 3.5 5ZM12.5 10C11.122 10 10 11.121 10 12.5C10 13.879 11.122 15 12.5 15C13.878 15 15 13.879 15 12.5C15 11.121 13.878 10 12.5 10ZM12.5 14C11.673 14 11 13.327 11 12.5C11 11.673 11.673 11 12.5 11C13.327 11 14 11.673 14 12.5C14 13.327 13.327 14 12.5 14ZM11.5 7.5C11.5 6.948 11.948 6.5 12.5 6.5C13.052 6.5 13.5 6.948 13.5 7.5C13.5 8.052 13.052 8.5 12.5 8.5C11.948 8.5 11.5 8.052 11.5 7.5ZM11.5 3.5C11.5 2.948 11.948 2.5 12.5 2.5C13.052 2.5 13.5 2.948 13.5 3.5C13.5 4.052 13.052 4.5 12.5 4.5C11.948 4.5 11.5 4.052 11.5 3.5Z"></path></svg>'},9301:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13 10.05V5.5C13 4.12 11.88 3 10.5 3H8.71L9.85 1.85C10.05 1.66 10.05 1.34 9.85 1.15C9.66 0.95 9.34 0.95 9.15 1.15L7.15 3.15C6.95 3.34 6.95 3.66 7.15 3.85L9.15 5.85C9.34 6.05 9.66 6.05 9.85 5.85C10.05 5.66 10.05 5.34 9.85 5.15L8.71 4H10.5C11.33 4 12 4.67 12 5.5V10.05C10.86 10.28 10 11.29 10 12.5C10 13.88 11.12 15 12.5 15C13.88 15 15 13.88 15 12.5C15 11.29 14.14 10.28 13 10.05ZM12.5 14C11.67 14 11 13.33 11 12.5C11 11.67 11.67 11 12.5 11C13.33 11 14 11.67 14 12.5C14 13.33 13.33 14 12.5 14ZM6 3.5C6 2.12 4.88 1 3.5 1C2.12 1 1 2.12 1 3.5C1 4.71 1.86 5.72 3 5.95V10.051C1.86 10.283 1 11.293 1 12.5C1 13.879 2.122 15 3.5 15C4.878 15 6 13.879 6 12.5C6 11.292 5.14 10.283 4 10.051V5.95C5.14 5.72 6 4.71 6 3.5ZM2 3.5C2 2.67 2.67 2 3.5 2C4.33 2 5 2.67 5 3.5C5 4.33 4.33 5 3.5 5C2.67 5 2 4.33 2 3.5ZM5 12.5C5 13.327 4.327 14 3.5 14C2.673 14 2 13.327 2 12.5C2 11.673 2.673 11 3.5 11C4.327 11 5 11.673 5 12.5Z"></path></svg>'},4468:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11.5 2H4.5C3.119 2 2 3.119 2 4.5V11.5C2 12.881 3.119 14 4.5 14H11.5C12.881 14 14 12.881 14 11.5V4.5C14 3.119 12.881 2 11.5 2ZM3 4.5C3 3.672 3.672 3 4.5 3H6V6H3V4.5ZM4.5 13C3.672 13 3 12.328 3 11.5V7H6V13H4.5ZM13 11.5C13 12.328 12.328 13 11.5 13H7V7H13V11.5ZM13 6H7V3H11.5C12.328 3 13 3.672 13 4.5V6Z"></path></svg>'},4593:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1 8C1 11.859 4.14 15 8 15C11.86 15 15 11.859 15 8C15 4.141 11.86 1 8 1C4.14 1 1 4.141 1 8ZM2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8Z"></path></svg>'},2775:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13.5 8.5C13.224 8.5 13 8.276 13 8C13 5.243 10.757 3 8 3C5.243 3 3 5.243 3 8C3 8.276 2.776 8.5 2.5 8.5C2.224 8.5 2 8.276 2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 8.276 13.776 8.5 13.5 8.5Z"></path></svg>'},7907:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M7.1472 0.146372C7.3422 -0.0486279 7.65923 -0.0486279 7.85423 0.146372L11.3542 3.64637C11.5489 3.8414 11.5491 4.15852 11.3542 4.3534C11.1593 4.54823 10.8422 4.54804 10.6472 4.3534L8.00071 1.70692V6.49989C8.00071 9.99981 9.99987 10.9998 13.4997 10.9999C13.7757 10.9999 13.9997 11.2239 13.9997 11.4999C13.9997 11.7759 13.7748 11.9999 13.4988 11.9999C10.9978 11.9999 9.08321 11.4131 7.99974 9.995V14.4999C7.99974 14.776 7.77588 14.9999 7.49974 14.9999C7.22371 14.9998 6.99974 14.7759 6.99974 14.4999V1.70692L4.35423 4.3534C4.15934 4.54823 3.84221 4.54804 3.6472 4.3534C3.45222 4.15842 3.45226 3.84138 3.6472 3.64637L7.1472 0.146372Z"></path></svg>'},3689:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13.854 6.146L12.147 4.439C11.864 4.156 11.487 4 11.086 4H9V3C9 1.897 8.103 1 7 1C5.897 1 5 1.897 5 3V4H3.5C2.673 4 2 4.673 2 5.5V7.5C2 8.327 2.673 9 3.5 9H5V14C5 14.551 5.449 15 6 15H8C8.551 15 9 14.551 9 14V9H11.086C11.486 9 11.863 8.844 12.147 8.561L13.854 6.854C14.049 6.659 14.049 6.341 13.854 6.146ZM6 3C6 2.449 6.449 2 7 2C7.551 2 8 2.449 8 3V4H6V3ZM8 14H6V9H8V14ZM11.439 7.854C11.346 7.947 11.217 8 11.085 8H3.5C3.224 8 3 7.776 3 7.5V5.5C3 5.224 3.224 5 3.5 5H11.086C11.217 5 11.346 5.053 11.44 5.146L12.794 6.5L11.439 7.854Z"></path></svg>'},4826:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M10.6484 5.64648C10.8434 5.45148 11.1605 5.45148 11.3555 5.64648C11.5498 5.84137 11.5499 6.15766 11.3555 6.35254L7.35547 10.3525C7.25747 10.4495 7.12898 10.499 7.00098 10.499C6.87299 10.499 6.74545 10.4505 6.64746 10.3525L4.64746 8.35254C4.45247 8.15754 4.45248 7.84148 4.64746 7.64648C4.84246 7.45148 5.15949 7.45148 5.35449 7.64648L7 9.29199L10.6465 5.64648H10.6484Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1C11.86 1 15 4.14 15 8C15 11.86 11.86 15 8 15C4.14 15 1 11.86 1 8C1 4.14 4.14 1 8 1ZM8 2C4.691 2 2 4.691 2 8C2 11.309 4.691 14 8 14C11.309 14 14 11.309 14 8C14 4.691 11.309 2 8 2Z"></path></svg>'},4759:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M5.99902 2.99902C6.55101 2.99904 6.99902 3.44703 6.99902 3.99902V4.99902C6.99902 7.59102 6.47153 9.73354 4.35254 11.8525C4.15754 12.0475 3.84148 12.0475 3.64648 11.8525C3.45148 11.6575 3.45148 11.3415 3.64648 11.1465C5.03348 9.76049 5.65377 8.38594 5.88477 6.79395C5.61781 6.9259 5.31794 7 5 7H4C3.448 7 3 6.552 3 6V4C3.00001 3.44801 3.44801 3 4 3H6L5.99902 2.99902Z"></path><path d="M11.999 2.99902C12.551 2.99904 12.999 3.44703 12.999 3.99902V4.99902C12.999 7.59102 12.4715 9.73354 10.3525 11.8525C10.1575 12.0475 9.84148 12.0475 9.64648 11.8525C9.45148 11.6575 9.45148 11.3415 9.64648 11.1465C11.0335 9.76049 11.6538 8.38594 11.8848 6.79395C11.6178 6.9259 11.3179 7 11 7H10C9.448 7 9 6.552 9 6V4C9.00001 3.44801 9.44801 3 10 3H12L11.999 2.99902Z"></path></svg>'},6276:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12.561 4.35398L9.647 1.43998C9.368 1.16098 8.981 1.00098 8.586 1.00098H4C2.897 1.00098 2 1.89798 2 3.00098V13.001C2 14.104 2.897 15.001 4 15.001H11C12.103 15.001 13 14.104 13 13.001V5.41498C13 5.01998 12.84 4.63398 12.561 4.35398ZM12 13C12 13.552 11.552 14 11 14H4C3.448 14 3 13.552 3 13V2.99998C3 2.44798 3.448 1.99998 4 1.99998H8.586C8.718 1.99998 8.847 2.05398 8.94 2.14598L11.854 5.05998C11.947 5.15298 12 5.28198 12 5.41398V13ZM10 6.49998C10 6.77598 9.776 6.99998 9.5 6.99998H8V8.49998C8 8.77598 7.776 8.99998 7.5 8.99998C7.224 8.99998 7 8.77598 7 8.49998V6.99998H5.5C5.224 6.99998 5 6.77598 5 6.49998C5 6.22398 5.224 5.99998 5.5 5.99998H7V4.49998C7 4.22398 7.224 3.99998 7.5 3.99998C7.776 3.99998 8 4.22398 8 4.49998V5.99998H9.5C9.776 5.99998 10 6.22398 10 6.49998ZM10 11.5C10 11.776 9.776 12 9.5 12H5.5C5.224 12 5 11.776 5 11.5C5 11.224 5.224 11 5.5 11H9.5C9.776 11 10 11.224 10 11.5Z"></path></svg>'},7830:_=>{_.exports='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 9C10.3425 9 9.00002 10.3425 9.00002 12C9.00002 13.6575 10.3425 15 12 15C13.6575 15 15 13.6575 15 12C15 10.3425 13.6575 9 12 9ZM12 13.5C11.172 13.5 10.5 12.828 10.5 12C10.5 11.172 11.172 10.5 12 10.5C12.828 10.5 13.5 11.172 13.5 12C13.5 12.828 12.828 13.5 12 13.5ZM21.8475 14.5725L19.9185 12.942C19.8675 12.8985 19.8195 12.8505 19.776 12.7995C19.332 12.279 19.3965 11.5005 19.9185 11.058L21.8475 9.4275C22.0395 9.2655 22.113 9.0045 22.0365 8.766C21.579 7.3545 20.823 6.06 19.8285 4.962C19.7085 4.83 19.5405 4.758 19.368 4.758C19.2975 4.758 19.227 4.77 19.1595 4.794L16.779 5.6415C16.716 5.664 16.65 5.682 16.584 5.694C16.509 5.7075 16.434 5.715 16.3605 5.715C15.7725 5.715 15.2505 5.298 15.141 4.701L14.6865 2.223C14.6415 1.977 14.451 1.782 14.205 1.7295C13.485 1.5765 12.7485 1.5 12.0015 1.5C11.2545 1.5 10.5165 1.578 9.79652 1.7295C9.55052 1.782 9.36002 1.977 9.31502 2.223L8.86202 4.701C8.85002 4.767 8.83202 4.8315 8.80952 4.8945C8.62802 5.4 8.15102 5.715 7.64102 5.715C7.50302 5.715 7.36202 5.691 7.22402 5.643L4.84352 4.7955C4.77602 4.7715 4.70402 4.7595 4.63502 4.7595C4.46252 4.7595 4.29452 4.8315 4.17452 4.9635C3.17852 6.0615 2.42402 7.356 1.96502 8.7675C1.88702 9.006 1.96202 9.267 2.15402 9.429L4.08302 11.0595C4.13402 11.103 4.18202 11.151 4.22552 11.202C4.66952 11.7225 4.60502 12.501 4.08302 12.9435L2.15402 14.574C1.96202 14.736 1.88852 14.997 1.96502 15.2355C2.42252 16.647 3.17852 17.9415 4.17452 19.0395C4.29452 19.1715 4.46252 19.2435 4.63502 19.2435C4.70552 19.2435 4.77602 19.2315 4.84352 19.2075L7.22402 18.36C7.28702 18.3375 7.35302 18.3195 7.41902 18.3075C7.49402 18.294 7.56902 18.288 7.64252 18.288C8.23052 18.288 8.75252 18.705 8.86202 19.302L9.31502 21.78C9.36002 22.026 9.55052 22.221 9.79652 22.2735C10.5165 22.4265 11.2545 22.503 12.0015 22.503C12.7485 22.503 13.4865 22.425 14.205 22.2735C14.451 22.221 14.6415 22.026 14.6865 21.78L15.141 19.302C15.153 19.236 15.171 19.1715 15.1935 19.1085C15.375 18.603 15.852 18.288 16.362 18.288C16.5 18.288 16.641 18.312 16.779 18.36L19.158 19.2075C19.227 19.2315 19.2975 19.2435 19.3665 19.2435C19.539 19.2435 19.707 19.1715 19.827 19.0395C20.823 17.9415 21.5775 16.647 22.035 15.2355C22.113 14.997 22.038 14.736 21.846 14.574L21.8475 14.5725ZM19.092 17.589L17.2815 16.944C16.9845 16.839 16.6755 16.785 16.362 16.785C15.2085 16.785 14.1705 17.514 13.782 18.5985C13.731 18.738 13.6935 18.882 13.6665 19.029L13.3215 20.9055C12.8865 20.9685 12.444 21 12.0015 21C11.559 21 11.1165 20.9685 10.68 20.904L10.3365 19.0275C10.098 17.727 8.96552 16.7835 7.64252 16.7835C7.48052 16.7835 7.31552 16.7985 7.14902 16.8285C7.00352 16.8555 6.86102 16.893 6.72002 16.9425L4.90952 17.5875C4.35752 16.896 3.91652 16.1385 3.59102 15.321L5.05202 14.0865C5.61152 13.614 5.95202 12.951 6.01202 12.222C6.07202 11.493 5.84252 10.785 5.36702 10.227C5.27102 10.1145 5.16452 10.008 5.05202 9.912L3.59102 8.6775C3.91652 7.86 4.35752 7.101 4.90952 6.411L6.72002 7.056C7.01702 7.161 7.32602 7.215 7.64102 7.215C8.79452 7.215 9.83252 6.486 10.221 5.4015C10.272 5.2605 10.3095 5.1165 10.3365 4.971L10.68 3.0945C11.1165 3.0315 11.559 2.9985 12.0015 2.9985C12.444 2.9985 12.8865 3.03 13.3215 3.093L13.665 4.9695C13.9035 6.27 15.036 7.2135 16.359 7.2135C16.521 7.2135 16.686 7.1985 16.851 7.1685C16.9965 7.1415 17.1405 7.104 17.2815 7.0545L19.092 6.4095C19.644 7.0995 20.085 7.8585 20.4105 8.676L18.951 9.9105C18.3915 10.383 18.0495 11.046 17.991 11.775C17.931 12.504 18.1605 13.2135 18.636 13.77C18.7335 13.884 18.8385 13.989 18.9525 14.085L20.4135 15.3195C20.088 16.137 19.647 16.896 19.095 17.586L19.092 17.589Z"></path></svg>'},3072:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M8 1C4.14 1 1 4.14 1 8C1 11.86 4.14 15 8 15C11.86 15 15 11.86 15 8C15 4.14 11.86 1 8 1ZM8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14ZM10.854 5.146C11.049 5.341 11.049 5.658 10.854 5.853L5.854 10.853C5.756 10.951 5.628 10.999 5.5 10.999C5.372 10.999 5.244 10.95 5.146 10.853C4.951 10.658 4.951 10.341 5.146 10.146L10.146 5.146C10.341 4.951 10.658 4.951 10.853 5.146H10.854Z"></path></svg>'},6193:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M5.46524 9.82962C5.62134 9.94037 5.80806 9.99974 5.99946 9.99948C6.19151 10.0003 6.37897 9.94082 6.53546 9.82948C6.69223 9.71378 6.81095 9.55398 6.87646 9.37048L7.22346 8.30348C7.3077 8.05191 7.44906 7.82327 7.63646 7.63548C7.82305 7.44851 8.05078 7.30776 8.30146 7.22448L9.38746 6.87148C9.56665 6.80759 9.72173 6.68989 9.83146 6.53448C9.94145 6.37908 10.0005 6.19337 10.0005 6.00298C10.0005 5.81259 9.94145 5.62689 9.83146 5.47148C9.71293 5.30613 9.54426 5.18339 9.35046 5.12148L8.28146 4.77548C8.02989 4.69238 7.80123 4.55163 7.61371 4.36447C7.4262 4.1773 7.28503 3.9489 7.20146 3.69748L6.84846 2.61348C6.78519 2.43423 6.66777 2.27908 6.51246 2.16948C6.35557 2.06133 6.16951 2.00342 5.97896 2.00342C5.78841 2.00342 5.60235 2.06133 5.44546 2.16948C5.28572 2.28196 5.16594 2.44237 5.10346 2.62748L4.74846 3.71748C4.66476 3.96155 4.52691 4.18351 4.34524 4.36673C4.16358 4.54996 3.9428 4.6897 3.69946 4.77548L2.61546 5.12648C2.43437 5.19048 2.27775 5.30937 2.16743 5.4666C2.05712 5.62383 1.99859 5.81155 2.00003 6.00361C2.00146 6.19568 2.06277 6.38251 2.17541 6.53808C2.28806 6.69364 2.44643 6.81019 2.62846 6.87148L3.69546 7.21848C3.94767 7.30297 4.17673 7.44506 4.36446 7.63348C4.41519 7.6837 4.46262 7.73715 4.50646 7.79348C4.62481 7.94615 4.71614 8.11797 4.77646 8.30148L5.12846 9.38148C5.19143 9.56222 5.30914 9.71886 5.46524 9.82962ZM4.00746 6.26448L3.15246 5.99948L4.01646 5.71848C4.41071 5.58184 4.76826 5.35637 5.06146 5.05948C5.35281 4.76039 5.57294 4.39943 5.70546 4.00348L5.97046 3.14448L6.25046 4.00648C6.38349 4.40638 6.60809 4.76969 6.90636 5.06744C7.20463 5.36519 7.56833 5.58915 7.96846 5.72148L8.84846 5.99048L7.98746 6.27048C7.58707 6.40272 7.22321 6.62691 6.92505 6.92507C6.62689 7.22324 6.4027 7.58709 6.27046 7.98748L6.00546 8.84448L5.72646 7.98548C5.63026 7.69329 5.48483 7.41968 5.29646 7.17648C5.22699 7.08766 5.15254 7.00286 5.07346 6.92248C4.7738 6.62366 4.4089 6.39842 4.00746 6.26448ZM10.5344 13.8515C10.6703 13.9477 10.8328 13.9994 10.9994 13.9995C11.1642 13.998 11.3245 13.9456 11.4584 13.8495C11.5979 13.751 11.7029 13.611 11.7584 13.4495L12.0064 12.6875C12.0595 12.529 12.1485 12.385 12.2664 12.2665C12.3837 12.148 12.5277 12.0592 12.6864 12.0075L13.4584 11.7555C13.6161 11.701 13.7528 11.5985 13.8494 11.4625C13.9227 11.3595 13.9706 11.2405 13.9891 11.1154C14.0076 10.9903 13.9962 10.8626 13.9558 10.7428C13.9154 10.623 13.8472 10.5144 13.7567 10.4261C13.6662 10.3377 13.5561 10.272 13.4354 10.2345L12.6714 9.98548C12.5132 9.93291 12.3695 9.8443 12.2514 9.72663C12.1334 9.60896 12.0444 9.46547 11.9914 9.30748L11.7394 8.53348C11.685 8.37623 11.5825 8.24011 11.4464 8.14448C11.3443 8.07153 11.2266 8.02359 11.1026 8.00453C10.9787 7.98547 10.8519 7.99582 10.7327 8.03475C10.6135 8.07369 10.5051 8.1401 10.4163 8.22865C10.3274 8.31719 10.2607 8.42538 10.2214 8.54448L9.97435 9.30648C9.92207 9.46413 9.83452 9.60777 9.71835 9.72648C9.60382 9.84272 9.46428 9.9313 9.31035 9.98548L8.53435 10.2385C8.41689 10.2793 8.31057 10.347 8.22382 10.4361C8.13708 10.5252 8.0723 10.6333 8.03464 10.7518C7.99698 10.8704 7.98746 10.996 8.00686 11.1189C8.02625 11.2417 8.07401 11.3583 8.14635 11.4595C8.24456 11.5993 8.38462 11.7044 8.54635 11.7595L9.30935 12.0065C9.46821 12.0599 9.61262 12.1492 9.73135 12.2675C9.84958 12.3857 9.93801 12.5304 9.98935 12.6895L10.2424 13.4635C10.2971 13.6199 10.3992 13.7555 10.5344 13.8515ZM9.62035 11.0585L9.44235 10.9995L9.62635 10.9355C9.92811 10.8305 10.2018 10.6578 10.4264 10.4305C10.6528 10.2015 10.8238 9.92374 10.9264 9.61848L10.9844 9.44048L11.0434 9.62148C11.1453 9.92819 11.3175 10.2069 11.5461 10.4353C11.7748 10.6638 12.0536 10.8357 12.3604 10.9375L12.5554 11.0005L12.3754 11.0595C12.068 11.1617 11.7888 11.3344 11.5601 11.5637C11.3314 11.7931 11.1596 12.0728 11.0584 12.3805L10.9994 12.5615L10.9414 12.3805C10.84 12.0721 10.6676 11.7919 10.4382 11.5623C10.2088 11.3326 9.92863 11.1601 9.62035 11.0585Z"></path></svg>'},6670:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M6 5C5.44772 5 5 5.44772 5 6V10C5 10.5523 5.44772 11 6 11H10C10.5523 11 11 10.5523 11 10V6C11 5.44772 10.5523 5 10 5H6ZM1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z"></path></svg>'},3884:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path shape-rendering="optimizeQuality" d="M7.14645 0.646447C7.34171 0.451184 7.65829 0.451184 7.85355 0.646447L9.35355 2.14645C9.54882 2.34171 9.54882 2.65829 9.35355 2.85355L7.85355 4.35355C7.65829 4.54882 7.34171 4.54882 7.14645 4.35355C6.95118 4.15829 6.95118 3.84171 7.14645 3.64645L7.7885 3.00439C5.12517 3.11522 3 5.30943 3 8C3 9.56799 3.72118 10.9672 4.85185 11.8847C5.06627 12.0587 5.09904 12.3736 4.92503 12.588C4.75103 12.8024 4.43615 12.8352 4.22172 12.6612C2.86712 11.5619 2 9.88205 2 8C2 4.75447 4.57689 2.1108 7.79629 2.00339L7.14645 1.35355C6.95118 1.15829 6.95118 0.841709 7.14645 0.646447ZM11.075 3.41199C11.249 3.19756 11.5639 3.1648 11.7783 3.3388C13.1329 4.43806 14 6.11795 14 8C14 11.2455 11.4231 13.8892 8.20371 13.9966L8.85355 14.6464C9.04882 14.8417 9.04882 15.1583 8.85355 15.3536C8.65829 15.5488 8.34171 15.5488 8.14645 15.3536L6.64645 13.8536C6.55268 13.7598 6.5 13.6326 6.5 13.5C6.5 13.3674 6.55268 13.2402 6.64645 13.1464L8.14645 11.6464C8.34171 11.4512 8.65829 11.4512 8.85355 11.6464C9.04882 11.8417 9.04882 12.1583 8.85355 12.3536L8.2115 12.9956C10.8748 12.8848 13 10.6906 13 8C13 6.43201 12.2788 5.03283 11.1482 4.1153C10.9337 3.94129 10.901 3.62641 11.075 3.41199Z"></path></svg>'},4147:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11 6C10.4477 6 10 5.55228 10 5C10 4.44772 10.4477 4 11 4C11.5523 4 12 4.44772 12 5C12 5.55228 11.5523 6 11 6ZM2.58722 10.1357C1.80426 9.3566 1.80426 8.0934 2.58722 7.31428L7.32688 2.59785C7.70082 2.22574 8.20735 2.01572 8.73617 2.01353L11.9867 2.00002C13.1029 1.99538 14.008 2.89877 13.9999 4.00947L13.9755 7.3725C13.9717 7.89662 13.7608 8.3982 13.3884 8.76882L8.71865 13.4157C7.93569 14.1948 6.66627 14.1948 5.88331 13.4157L2.58722 10.1357ZM3.29605 8.01964C2.90458 8.4092 2.90458 9.0408 3.29606 9.43036L6.59214 12.7103C6.98362 13.0999 7.61834 13.0999 8.00982 12.7103L12.6795 8.06346C12.8658 7.87815 12.9712 7.62736 12.9731 7.3653L12.9975 4.00227C13.0016 3.44692 12.549 2.99522 11.9909 2.99754L8.74036 3.01105C8.47595 3.01215 8.22268 3.11716 8.03571 3.30321L3.29605 8.01964Z"></path></svg>'},7858:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4.85401 2.14649C5.04901 2.34149 5.04901 2.65849 4.85401 2.85349L2.85401 4.85349C2.65901 5.04849 2.34201 5.04849 2.14701 4.85349L1.14701 3.85349C0.952013 3.65849 0.952013 3.34149 1.14701 3.14649C1.34201 2.95149 1.65901 2.95149 1.85401 3.14649L2.50001 3.79249L4.14601 2.14649C4.34101 1.95149 4.65901 1.95149 4.85401 2.14649ZM14.5 4.00049H6.50001C6.22401 4.00049 6.00001 3.77649 6.00001 3.50049C6.00001 3.22449 6.22401 3.00049 6.50001 3.00049H14.5C14.776 3.00049 15 3.22449 15 3.50049C15 3.77649 14.776 4.00049 14.5 4.00049ZM4.85401 11.1465C5.04901 11.3415 5.04901 11.6585 4.85401 11.8535L2.85401 13.8535C2.65901 14.0485 2.34201 14.0485 2.14701 13.8535L1.14701 12.8535C0.952013 12.6585 0.952013 12.3415 1.14701 12.1465C1.34201 11.9515 1.65901 11.9515 1.85401 12.1465L2.50001 12.7925L4.14601 11.1465C4.34101 10.9515 4.65901 10.9515 4.85401 11.1465ZM14.5 13.0005H6.50001C6.22401 13.0005 6.00001 12.7765 6.00001 12.5005C6.00001 12.2245 6.22401 12.0005 6.50001 12.0005H14.5C14.776 12.0005 15 12.2245 15 12.5005C15 12.7765 14.776 13.0005 14.5 13.0005ZM4.85401 6.64649C5.04901 6.84149 5.04901 7.15849 4.85401 7.35349L2.85401 9.35349C2.65901 9.54849 2.34201 9.54849 2.14701 9.35349L1.14701 8.35349C0.952013 8.15849 0.952013 7.84149 1.14701 7.64649C1.34201 7.45149 1.65901 7.45149 1.85401 7.64649L2.50001 8.29249L4.14601 6.64649C4.34101 6.45149 4.65901 6.45149 4.85401 6.64649ZM14.5 8.50049H6.50001C6.22401 8.50049 6.00001 8.27649 6.00001 8.00049C6.00001 7.72449 6.22401 7.50049 6.50001 7.50049H14.5C14.776 7.50049 15 7.72449 15 8.00049C15 8.27649 14.776 8.50049 14.5 8.50049Z"></path></svg>'},8314:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M2 3.50049C2 3.22435 2.22386 3.00049 2.5 3.00049H13.5C13.7761 3.00049 14 3.22435 14 3.50049C14 3.77663 13.7761 4.00049 13.5 4.00049H2.5C2.22386 4.00049 2 3.77663 2 3.50049ZM2 7.50049C2 7.22435 2.22386 7.00049 2.5 7.00049H13.5C13.7761 7.00049 14 7.22435 14 7.50049C14 7.77663 13.7761 8.00049 13.5 8.00049H2.5C2.22386 8.00049 2 7.77663 2 7.50049ZM2 11.5005C2 11.2243 2.22386 11.0005 2.5 11.0005H13.5C13.7761 11.0005 14 11.2243 14 11.5005C14 11.7766 13.7761 12.0005 13.5 12.0005H2.5C2.22386 12.0005 2 11.7766 2 11.5005Z"></path></svg>'},3685:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M14 2H10C10 0.897 9.103 0 8 0C6.897 0 6 0.897 6 2H2C1.724 2 1.5 2.224 1.5 2.5C1.5 2.776 1.724 3 2 3H2.54L3.349 12.708C3.456 13.994 4.55 15 5.84 15H10.159C11.449 15 12.543 13.993 12.65 12.708L13.459 3H13.999C14.275 3 14.499 2.776 14.499 2.5C14.499 2.224 14.275 2 13.999 2H14ZM8 1C8.551 1 9 1.449 9 2H7C7 1.449 7.449 1 8 1ZM11.655 12.625C11.591 13.396 10.934 14 10.16 14H5.841C5.067 14 4.41 13.396 4.346 12.625L3.544 3H12.458L11.656 12.625H11.655ZM7 5.5V11.5C7 11.776 6.776 12 6.5 12C6.224 12 6 11.776 6 11.5V5.5C6 5.224 6.224 5 6.5 5C6.776 5 7 5.224 7 5.5ZM10 5.5V11.5C10 11.776 9.776 12 9.5 12C9.224 12 9 11.776 9 11.5V5.5C9 5.224 9.224 5 9.5 5C9.776 5 10 5.224 10 5.5Z"></path></svg>'},663:_=>{_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M14.831 11.965L9.206 1.714C8.965 1.274 8.503 1 8 1C7.497 1 7.035 1.274 6.794 1.714L1.169 11.965C1.059 12.167 1 12.395 1 12.625C1 13.383 1.617 14 2.375 14H13.625C14.383 14 15 13.383 15 12.625C15 12.395 14.941 12.167 14.831 11.965ZM13.625 13H2.375C2.168 13 2 12.832 2 12.625C2 12.561 2.016 12.5 2.046 12.445L7.671 2.195C7.736 2.075 7.863 2 8 2C8.137 2 8.264 2.075 8.329 2.195L13.954 12.445C13.984 12.501 14 12.561 14 12.625C14 12.832 13.832 13 13.625 13ZM8.75 11.25C8.75 11.664 8.414 12 8 12C7.586 12 7.25 11.664 7.25 11.25C7.25 10.836 7.586 10.5 8 10.5C8.414 10.5 8.75 10.836 8.75 11.25ZM7.5 9V5.5C7.5 5.224 7.724 5 8 5C8.276 5 8.5 5.224 8.5 5.5V9C8.5 9.276 8.276 9.5 8 9.5C7.724 9.5 7.5 9.276 7.5 9Z"></path></svg>'},4339:_=>{_.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.807 2.265C13.228 1.532 12.313 1.141 11.083 1.004C9.877 0.870002 8.821 1.038 8.139 1.769C8.09 1.822 8.043 1.877 8 1.933C7.957 1.877 7.91 1.822 7.861 1.769C7.179 1.038 6.123 0.870002 4.917 1.004C3.687 1.141 2.772 1.532 2.193 2.265C1.628 2.981 1.5 3.879 1.5 4.75C1.5 5.322 1.553 5.897 1.754 6.405L1.586 7.243L1.52 7.276C0.588 7.742 0 8.694 0 9.736V11C0 11.24 0.086 11.438 0.156 11.567C0.231 11.704 0.325 11.828 0.415 11.933C0.595 12.143 0.819 12.346 1.02 12.513C1.225 12.684 1.427 12.836 1.577 12.943C1.816 13.116 2.062 13.275 2.318 13.423C2.625 13.6 3.066 13.832 3.614 14.065C4.391 14.395 5.404 14.722 6.553 14.887C6.203 14.377 5.931 13.809 5.751 13.202C5.173 13.055 4.645 12.873 4.201 12.684C3.717 12.479 3.331 12.274 3.067 12.123L3.002 12.085V7.824L3.025 7.709C3.515 7.919 4.1 8 4.752 8C5.898 8 6.812 7.672 7.462 7.009C7.681 6.785 7.859 6.535 8.002 6.266C8.049 6.354 8.106 6.436 8.16 6.52C8.579 6.238 9.038 6.013 9.522 5.843C9.26 5.52 9.077 5.057 8.996 4.407C8.879 3.471 9.034 3.011 9.238 2.793C9.431 2.586 9.875 2.379 10.919 2.495C11.939 2.608 12.398 2.899 12.632 3.195C12.879 3.508 13.002 3.984 13.002 4.75C13.002 5.158 12.967 5.453 12.909 5.674C13.398 5.792 13.865 5.967 14.3 6.197C14.443 5.741 14.502 5.248 14.502 4.75C14.502 3.879 14.374 2.981 13.809 2.265H13.807ZM7.006 4.407C6.915 5.133 6.704 5.637 6.388 5.959C6.089 6.264 5.604 6.5 4.75 6.5C3.828 6.5 3.47 6.301 3.308 6.12C3.129 5.92 3 5.542 3 4.75C3 3.984 3.123 3.508 3.37 3.195C3.604 2.899 4.063 2.609 5.083 2.495C6.127 2.379 6.571 2.586 6.764 2.793C6.968 3.011 7.123 3.471 7.006 4.407Z" fill="currentColor"></path><path d="M11.5 7C9.015 7 7 9.015 7 11.5C7 13.985 9.015 16 11.5 16C13.985 16 16 13.985 16 11.5C16 9.015 13.985 7 11.5 7ZM13.854 13.146L13.147 13.853L11.501 12.207L9.855 13.853L9.148 13.146L10.794 11.5L9.148 9.854L9.855 9.147L11.501 10.793L13.147 9.147L13.854 9.854L12.208 11.5L13.854 13.146Z" fill="var(--vscode-list-errorForeground, currentColor)"></path></svg>'},8726:_=>{_.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.807 2.265C13.228 1.532 12.313 1.141 11.083 1.004C9.877 0.870002 8.821 1.038 8.139 1.769C8.09 1.822 8.043 1.877 8 1.933C7.957 1.877 7.91 1.822 7.861 1.769C7.179 1.038 6.123 0.870002 4.917 1.004C3.687 1.141 2.772 1.532 2.193 2.265C1.628 2.981 1.5 3.879 1.5 4.75C1.5 5.322 1.553 5.897 1.754 6.405L1.586 7.243L1.52 7.276C0.588 7.742 0 8.694 0 9.736V11C0 11.24 0.086 11.438 0.156 11.567C0.231 11.704 0.325 11.828 0.415 11.933C0.595 12.143 0.819 12.346 1.02 12.513C1.225 12.684 1.427 12.836 1.577 12.943C1.816 13.116 2.062 13.275 2.318 13.423C2.625 13.6 3.066 13.832 3.614 14.065C4.391 14.395 5.404 14.722 6.553 14.887C6.203 14.377 5.931 13.809 5.751 13.202C5.173 13.055 4.645 12.873 4.201 12.684C3.717 12.479 3.331 12.274 3.067 12.123L3.002 12.085V7.824L3.025 7.709C3.515 7.919 4.1 8 4.752 8C5.898 8 6.812 7.672 7.462 7.009C7.681 6.785 7.859 6.535 8.002 6.266C8.049 6.354 8.106 6.436 8.16 6.52C8.579 6.238 9.038 6.013 9.522 5.843C9.26 5.52 9.077 5.057 8.996 4.407C8.879 3.471 9.034 3.011 9.238 2.793C9.431 2.586 9.875 2.379 10.919 2.495C11.939 2.608 12.398 2.899 12.632 3.195C12.879 3.508 13.002 3.984 13.002 4.75C13.002 5.158 12.967 5.453 12.909 5.674C13.398 5.792 13.865 5.967 14.3 6.197C14.443 5.741 14.502 5.248 14.502 4.75C14.502 3.879 14.374 2.981 13.809 2.265H13.807ZM7.006 4.407C6.915 5.133 6.704 5.637 6.388 5.959C6.089 6.264 5.604 6.5 4.75 6.5C3.828 6.5 3.47 6.301 3.308 6.12C3.129 5.92 3 5.542 3 4.75C3 3.984 3.123 3.508 3.37 3.195C3.604 2.899 4.063 2.609 5.083 2.495C6.127 2.379 6.571 2.586 6.764 2.793C6.968 3.011 7.123 3.471 7.006 4.407Z" fill="currentColor"></path><path d="M11.5 7C9.015 7 7 9.015 7 11.5C7 13.985 9.015 16 11.5 16C13.985 16 16 13.985 16 11.5C16 9.015 13.985 7 11.5 7ZM11.5 14.25C10.963 14.25 10.445 14.105 10 13.844V14.5H9V12.5L9.5 12H11.5V13H10.536C10.823 13.16 11.155 13.25 11.5 13.25C12.177 13.25 12.805 12.907 13.137 12.354L13.994 12.87C13.481 13.722 12.525 14.25 11.5 14.25ZM14 10.5L13.5 11H11.5V10H12.464C12.177 9.84 11.845 9.75 11.5 9.75C10.823 9.75 10.195 10.093 9.863 10.646L9.006 10.13C9.519 9.278 10.475 8.75 11.5 8.75C12.037 8.75 12.555 8.895 13 9.156V8.5H14V10.5Z" fill="var(--vscode-editorWarning-foreground, currentColor)"></path></svg>'},9336:_=>{_.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.807 2.265C13.228 1.532 12.313 1.141 11.083 1.004C9.877 0.870002 8.821 1.038 8.139 1.769C8.09 1.822 8.043 1.877 8 1.933C7.957 1.877 7.91 1.822 7.861 1.769C7.179 1.038 6.123 0.870002 4.917 1.004C3.687 1.141 2.772 1.532 2.193 2.265C1.628 2.981 1.5 3.879 1.5 4.75C1.5 5.322 1.553 5.897 1.754 6.405L1.586 7.243L1.52 7.276C0.588 7.742 0 8.694 0 9.736V11C0 11.24 0.086 11.438 0.156 11.567C0.231 11.704 0.325 11.828 0.415 11.933C0.595 12.143 0.819 12.346 1.02 12.513C1.225 12.684 1.427 12.836 1.577 12.943C1.816 13.116 2.062 13.275 2.318 13.423C2.625 13.6 3.066 13.832 3.614 14.065C4.391 14.395 5.404 14.722 6.553 14.887C6.203 14.377 5.931 13.809 5.751 13.202C5.173 13.055 4.645 12.873 4.201 12.684C3.717 12.479 3.331 12.274 3.067 12.123L3.002 12.085V7.824L3.025 7.709C3.515 7.919 4.1 8 4.752 8C5.898 8 6.812 7.672 7.462 7.009C7.681 6.785 7.859 6.535 8.002 6.266C8.049 6.354 8.106 6.436 8.16 6.52C8.579 6.238 9.038 6.013 9.522 5.843C9.26 5.52 9.077 5.057 8.996 4.407C8.879 3.471 9.034 3.011 9.238 2.793C9.431 2.586 9.875 2.379 10.919 2.495C11.939 2.608 12.398 2.899 12.632 3.195C12.879 3.508 13.002 3.984 13.002 4.75C13.002 5.158 12.967 5.453 12.909 5.674C13.398 5.792 13.865 5.967 14.3 6.197C14.443 5.741 14.502 5.248 14.502 4.75C14.502 3.879 14.374 2.981 13.809 2.265H13.807ZM7.006 4.407C6.915 5.133 6.704 5.637 6.388 5.959C6.089 6.264 5.604 6.5 4.75 6.5C3.828 6.5 3.47 6.301 3.308 6.12C3.129 5.92 3 5.542 3 4.75C3 3.984 3.123 3.508 3.37 3.195C3.604 2.899 4.063 2.609 5.083 2.495C6.127 2.379 6.571 2.586 6.764 2.793C6.968 3.011 7.123 3.471 7.006 4.407Z" fill="currentColor"></path><path d="M11.5 7C9.015 7 7 9.015 7 11.5C7 13.985 9.015 16 11.5 16C13.985 16 16 13.985 16 11.5C16 9.015 13.985 7 11.5 7ZM11.393 13.309L10.7 13.401L8.7 11.901L9.3 11.1L10.909 12.307L13.357 9.192L14.143 9.809L11.393 13.309Z" fill="var(--vscode-notebookStatusSuccessIcon-foreground, currentColor)"></path></svg>'},8440:_=>{_.exports='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:evenodd;fill:#FFFFFF;fill-opacity:1;" d="M 14 0 C 6.265625 0 0 6.265625 0 14 C 0 20.195312 4.007812 25.425781 9.574219 27.285156 C 10.273438 27.402344 10.535156 26.984375 10.535156 26.617188 C 10.535156 26.285156 10.515625 25.183594 10.515625 24.011719 C 7 24.660156 6.089844 23.152344 5.808594 22.363281 C 5.652344 21.960938 4.972656 20.722656 4.375 20.386719 C 3.886719 20.125 3.183594 19.476562 4.359375 19.460938 C 5.460938 19.441406 6.246094 20.476562 6.511719 20.894531 C 7.769531 23.011719 9.785156 22.417969 10.585938 22.050781 C 10.710938 21.140625 11.078125 20.527344 11.480469 20.175781 C 8.363281 19.828125 5.109375 18.621094 5.109375 13.265625 C 5.109375 11.742188 5.652344 10.484375 6.546875 9.503906 C 6.402344 9.152344 5.914062 7.714844 6.683594 5.792969 C 6.683594 5.792969 7.859375 5.425781 10.535156 7.226562 C 11.652344 6.914062 12.847656 6.753906 14.035156 6.753906 C 15.226562 6.753906 16.414062 6.914062 17.535156 7.226562 C 20.210938 5.410156 21.386719 5.792969 21.386719 5.792969 C 22.152344 7.714844 21.664062 9.152344 21.523438 9.503906 C 22.417969 10.484375 22.960938 11.726562 22.960938 13.265625 C 22.960938 18.636719 19.6875 19.828125 16.574219 20.175781 C 17.078125 20.613281 17.515625 21.453125 17.515625 22.765625 C 17.515625 24.640625 17.5 26.144531 17.5 26.617188 C 17.5 26.984375 17.761719 27.421875 18.460938 27.285156 C 24.160156 25.359375 27.996094 20.015625 28 14 C 28 6.265625 21.734375 0 14 0 Z M 14 0 "></path></g></svg>'}},mi={};function te(_){var k=mi[_];if(k!==void 0)return k.exports;var j=mi[_]={id:_,exports:{}};return $l[_].call(j.exports,j,j.exports,te),j.exports}i(te,"__webpack_require__"),te.n=_=>{var k=_&&_.__esModule?()=>_.default:()=>_;return te.d(k,{a:k}),k},te.d=(_,k)=>{for(var j in k)te.o(k,j)&&!te.o(_,j)&&Object.defineProperty(_,j,{enumerable:!0,get:k[j]})},te.o=(_,k)=>Object.prototype.hasOwnProperty.call(_,k),te.nc=void 0;var lc={};(()=>{"use strict";var bn;var _=te(5072),k=te.n(_),j=te(7825),K=te.n(j),V=te(7659),L=te.n(V),C=te(5056),h=te.n(C),D=te(540),A=te.n(D),B=te(1113),H=te.n(B),X=te(2410),Y={};Y.styleTagTransform=H(),Y.setAttributes=h(),Y.insert=L().bind(null,"head"),Y.domAPI=K(),Y.insertStyleElement=A();var Pe=k()(X.A,Y);const Fe=X.A&&X.A.locals?X.A.locals:void 0;var pe=te(3554),Oe={};Oe.styleTagTransform=H(),Oe.setAttributes=h(),Oe.insert=L().bind(null,"head"),Oe.domAPI=K(),Oe.insertStyleElement=A();var it=k()(pe.A,Oe);const U=pe.A&&pe.A.locals?pe.A.locals:void 0;var R=te(7334),l=te(6540),ie=te(961);const I=i(({className:r="",src:a,title:u})=>l.createElement("span",{className:`icon ${r}`,title:u,dangerouslySetInnerHTML:{__html:a}}),"Icon"),Z=null,O=l.createElement(I,{src:te(7290)}),$=l.createElement(I,{src:te(5898)}),oe=l.createElement(I,{src:te(2631),className:"check"}),J=l.createElement(I,{src:te(8945)}),ue=l.createElement(I,{src:te(8251)}),he=l.createElement(I,{src:te(8674),className:"pending"}),ce=l.createElement(I,{src:te(1019),className:"close"}),Ce=l.createElement(I,{src:te(7548)}),De=l.createElement(I,{src:te(5787)}),He=l.createElement(I,{src:te(6270)}),Ge=l.createElement(I,{src:te(4837)}),Xe=l.createElement(I,{src:te(5473)}),pt=l.createElement(I,{src:te(1456)}),ht=l.createElement(I,{src:te(979)}),Mt=l.createElement(I,{src:te(425)}),Be=l.createElement(I,{src:te(2400)}),z=l.createElement(I,{src:te(9494)}),ne=l.createElement(I,{src:te(4551)}),xe=l.createElement(I,{src:te(9301)}),w=l.createElement(I,{src:te(4593)}),P=l.createElement(I,{className:"loading",src:te(2775)}),ge=l.createElement(I,{src:te(3689)}),_e=l.createElement(I,{src:te(4826)}),Me=l.createElement(I,{src:te(4468)}),Ze=l.createElement(I,{src:te(4759)}),gt=l.createElement(I,{src:te(6276)}),ke=l.createElement(I,{src:te(7830)}),$e=l.createElement(I,{src:te(6193)}),Rt=l.createElement(I,{src:te(6670)}),yo=l.createElement(I,{src:te(3884)}),$t=l.createElement(I,{src:te(4147)}),wo=l.createElement(I,{src:te(7858)}),Vl=l.createElement(I,{src:te(8314)}),wt=l.createElement(I,{src:te(3685)}),Kn=l.createElement(I,{src:te(663)}),Yn=l.createElement(I,{src:te(7907)}),dn=l.createElement(I,{src:te(3072),className:"skip"}),pi=l.createElement(I,{className:"copilot-icon",src:te(4339)}),Ar=l.createElement(I,{className:"copilot-icon",src:te(8726)}),hi=l.createElement(I,{className:"copilot-icon",src:te(9336)});function gi(){const[r,a]=(0,l.useState)([0,0]);return(0,l.useLayoutEffect)(()=>{function u(){a([window.innerWidth,window.innerHeight])}return i(u,"updateSize"),window.addEventListener("resize",u),u(),()=>window.removeEventListener("resize",u)},[]),r}i(gi,"useWindowSize");const Ir=i(({optionsContext:r,defaultOptionLabel:a,defaultOptionValue:u,defaultAction:d,allOptions:c,optionsTitle:p,disabled:v,hasSingleAction:y,spreadable:x,isSecondary:T,primaryOptionValue:q})=>{const[F,G]=(0,l.useState)(!1),fe=i(de=>{de.target instanceof HTMLElement&&de.target.classList.contains("split-right")||G(!1)},"onHideAction");(0,l.useEffect)(()=>{const de=i(le=>fe(le),"onClickOrKey");F?(document.addEventListener("click",de),document.addEventListener("keydown",de)):(document.removeEventListener("click",de),document.removeEventListener("keydown",de))},[F,G]);const Q=(0,l.useRef)();return gi(),l.createElement("div",{className:`dropdown-container${x?" spreadable":""}`,ref:Q},Q.current&&x&&Q.current.clientWidth>375&&c&&!y?c().map(({label:de,value:le,action:Se,optionDisabled:be})=>{const Te=q&&le===q;return l.createElement("button",{className:`inlined-dropdown${Te?"":" secondary"}`,key:le,title:de,disabled:be||v,onClick:Se,value:le},de)}):l.createElement("div",{className:"primary-split-button"},l.createElement("button",{className:`split-left${T?" secondary":""}`,disabled:v,onClick:d,value:u(),title:typeof a()=="string"?a():p},a()),y?null:l.createElement("div",{className:`split${T?" secondary":""}${v?" disabled":""}`},l.createElement("div",{className:`separator${v?" disabled":""}`})),y?null:l.createElement("button",{className:`split-right${T?" secondary":""}`,title:p,disabled:v,"aria-expanded":F,onClick:i(de=>{de.preventDefault();const le=de.target.getBoundingClientRect(),Se=le.left,be=le.bottom;de.target.dispatchEvent(new MouseEvent("contextmenu",{bubbles:!0,clientX:Se,clientY:be})),de.stopPropagation()},"onClick"),onMouseDown:i(()=>G(!0),"onMouseDown"),onKeyDown:i(de=>{(de.key==="Enter"||de.key===" ")&&G(!0)},"onKeyDown"),"data-vscode-context":r()},ue)))},"contextDropdown_ContextDropdown"),lt="\xA0",Fr=i(({children:r})=>{const a=l.Children.count(r);return l.createElement(l.Fragment,{children:l.Children.map(r,(u,d)=>typeof u=="string"?`${d>0?lt:""}${u}${d<a-1&&typeof r[d+1]!="string"?lt:""}`:u)})},"Spaced");var vi=te(7975),xo=te(4353),Gn=te.n(xo),Ci=te(6279),yi=te.n(Ci),Xn=te(3581),Bl=te.n(Xn),Zt=Object.defineProperty,Eo=i((r,a,u)=>a in r?Zt(r,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[a]=u,"__defNormalProp"),qt=i((r,a,u)=>Eo(r,typeof a!="symbol"?a+"":a,u),"__publicField");function wi(r){return{dispose:r}}i(wi,"toDisposable");function wa(r){return wi(()=>Jn(r))}i(wa,"lifecycle_combinedDisposable");function Jn(r){for(;r.length;){const a=r.pop();a==null||a.dispose()}}i(Jn,"disposeAll");function zl(r,a){return a.push(r),r}i(zl,"addDisposable");const Vn=class Vn{constructor(){qt(this,"_isDisposed",!1),qt(this,"_disposables",[])}dispose(){this._isDisposed||(this._isDisposed=!0,Jn(this._disposables),this._disposables=[])}_register(a){return this._isDisposed?a.dispose():this._disposables.push(a),a}get isDisposed(){return this._isDisposed}};i(Vn,"Disposable");let Hr=Vn;var xi=Object.defineProperty,Ei=i((r,a,u)=>a in r?xi(r,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[a]=u,"utils_defNormalProp"),Je=i((r,a,u)=>Ei(r,typeof a!="symbol"?a+"":a,u),"utils_publicField");Gn().extend(yi(),{thresholds:[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:6,d:"day"},{l:"w",r:7},{l:"ww",r:3,d:"week"},{l:"M",r:4},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}]}),Gn().extend(Bl()),Gn().updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}});function jl(r,a){const u=Object.create(null);return r.filter(d=>{const c=a(d);return u[c]?!1:(u[c]=!0,!0)})}i(jl,"uniqBy");function bi(...r){return(a,u=null,d)=>{const c=combinedDisposable(r.map(p=>p(v=>a.call(u,v))));return d&&d.push(c),c}}i(bi,"anyEvent");function xa(r,a){return(u,d=null,c)=>r(p=>a(p)&&u.call(d,p),null,c)}i(xa,"filterEvent");function ki(r){return(a,u=null,d)=>{const c=r(p=>(c.dispose(),a.call(u,p)),null,d);return c}}i(ki,"onceEvent");function Sn(r){return/^[a-zA-Z]:\\/.test(r)}i(Sn,"isWindowsPath");function _i(r,a,u=!1,d=sep){return(Sn(r)||u)&&(r=r.toLowerCase(),a=a.toLowerCase()),r===a?!0:(r.charAt(r.length-1)!==d&&(r+=d),a.startsWith(r))}i(_i,"isDescendant");function bo(r,a){return r.reduce((u,d)=>{const c=a(d);return u[c]=[...u[c]||[],d],u},Object.create(null))}i(bo,"groupBy");const lo=class lo extends Error{constructor(a){super(`Unreachable case: ${a}`)}};i(lo,"UnreachableCaseError");let $r=lo;function Mi(r){return!!r.errors}i(Mi,"isHookError");function Si(r){let a=!0;if(r.errors&&Array.isArray(r.errors)){for(const u of r.errors)if(!u.field||!u.value||!u.status){a=!1;break}}else a=!1;return a}i(Si,"hasFieldErrors");function Ul(r){if(!(r instanceof Error))return typeof r=="string"?r:r.gitErrorCode?`${r.message}. Please check git output for more details`:r.stderr?`${r.stderr}. Please check git output for more details`:"Error";let a=r.message,u;if(r.message==="Validation Failed"&&Si(r))u=r.errors.map(d=>`Value "${d.value}" cannot be set for field ${d.field} (code: ${d.status})`).join(", ");else{if(r.message.startsWith("Validation Failed:"))return r.message;if(Mi(r)&&r.errors)return r.errors.map(d=>typeof d=="string"?d:d.message).join(", ")}return u&&(a=`${a}: ${u}`),a}i(Ul,"formatError");async function Li(r){return new Promise(a=>{const u=r(d=>{u.dispose(),a(d)})})}i(Li,"asPromise");async function ko(r,a){return Promise.race([r,new Promise(u=>{setTimeout(()=>u(void 0),a)})])}i(ko,"promiseWithTimeout");function er(r){const a=Gn()(r),u=Date.now();return a.diff(u,"month"),a.diff(u,"month")<1?a.fromNow():a.diff(u,"year")<1?`on ${a.format("MMM D")}`:`on ${a.format("MMM D, YYYY")}`}i(er,"dateFromNow");function Vt(r,a,u=!1){r.startsWith("#")&&(r=r.substring(1));const d=fn(r);if(a){const c=_o(d.r,d.g,d.b),p=.6,v=.18,y=.3,x=(d.r*.2126+d.g*.7152+d.b*.0722)/255,T=Math.max(0,Math.min((x-p)*-1e3,1)),q=(p-x)*100*T,F=fn(Mo(c.h,c.s,c.l+q)),G=`#${Mo(c.h,c.s,c.l+q)}`,fe=u?`#${tr({...d,a:v})}`:`rgba(${d.r},${d.g},${d.b},${v})`,Q=u?`#${tr({...F,a:y})}`:`rgba(${F.r},${F.g},${F.b},${y})`;return{textColor:G,backgroundColor:fe,borderColor:Q}}else return{textColor:`#${Vr(d)}`,backgroundColor:`#${r}`,borderColor:`#${r}`}}i(Vt,"utils_gitHubLabelColor");const tr=i(r=>{const a=[r.r,r.g,r.b];return r.a&&a.push(Math.floor(r.a*255)),a.map(u=>u.toString(16).padStart(2,"0")).join("")},"rgbToHex");function fn(r){const a=/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:{r:0,g:0,b:0}}i(fn,"hexToRgb");function _o(r,a,u){r/=255,a/=255,u/=255;let d=Math.min(r,a,u),c=Math.max(r,a,u),p=c-d,v=0,y=0,x=0;return p==0?v=0:c==r?v=(a-u)/p%6:c==a?v=(u-r)/p+2:v=(r-a)/p+4,v=Math.round(v*60),v<0&&(v+=360),x=(c+d)/2,y=p==0?0:p/(1-Math.abs(2*x-1)),y=+(y*100).toFixed(1),x=+(x*100).toFixed(1),{h:v,s:y,l:x}}i(_o,"rgbToHsl");function Mo(r,a,u){const d=u/100,c=a*Math.min(d,1-d)/100,p=i(v=>{const y=(v+r/30)%12,x=d-c*Math.max(Math.min(y-3,9-y,1),-1);return Math.round(255*x).toString(16).padStart(2,"0")},"f");return`${p(0)}${p(8)}${p(4)}`}i(Mo,"hslToHex");function Vr(r){return(.299*r.r+.587*r.g+.114*r.b)/255>.5?"000000":"ffffff"}i(Vr,"contrastColor");var Ti=(r=>(r[r.Period=46]="Period",r[r.Slash=47]="Slash",r[r.A=65]="A",r[r.Z=90]="Z",r[r.Backslash=92]="Backslash",r[r.a=97]="a",r[r.z=122]="z",r))(Ti||{});function So(r,a){return r<a?-1:r>a?1:0}i(So,"compare");function Br(r,a,u=0,d=r.length,c=0,p=a.length){for(;u<d&&c<p;u++,c++){const x=r.charCodeAt(u),T=a.charCodeAt(c);if(x<T)return-1;if(x>T)return 1}const v=d-u,y=p-c;return v<y?-1:v>y?1:0}i(Br,"compareSubstring");function Lo(r,a){return mn(r,a,0,r.length,0,a.length)}i(Lo,"compareIgnoreCase");function mn(r,a,u=0,d=r.length,c=0,p=a.length){for(;u<d&&c<p;u++,c++){let x=r.charCodeAt(u),T=a.charCodeAt(c);if(x===T)continue;const q=x-T;if(!(q===32&&zr(T))&&!(q===-32&&zr(x)))return To(x)&&To(T)?q:Br(r.toLowerCase(),a.toLowerCase(),u,d,c,p)}const v=d-u,y=p-c;return v<y?-1:v>y?1:0}i(mn,"compareSubstringIgnoreCase");function To(r){return r>=97&&r<=122}i(To,"isLowerAsciiLetter");function zr(r){return r>=65&&r<=90}i(zr,"isUpperAsciiLetter");const ti=class ti{constructor(){Je(this,"_value",""),Je(this,"_pos",0)}reset(a){return this._value=a,this._pos=0,this}next(){return this._pos+=1,this}hasNext(){return this._pos<this._value.length-1}cmp(a){const u=a.charCodeAt(0),d=this._value.charCodeAt(this._pos);return u-d}value(){return this._value[this._pos]}};i(ti,"StringIterator");let Qt=ti;const Er=class Er{constructor(a=!0){this._caseSensitive=a,Je(this,"_value"),Je(this,"_from"),Je(this,"_to")}reset(a){return this._value=a,this._from=0,this._to=0,this.next()}hasNext(){return this._to<this._value.length}next(){this._from=this._to;let a=!0;for(;this._to<this._value.length;this._to++)if(this._value.charCodeAt(this._to)===46)if(a)this._from++;else break;else a=!1;return this}cmp(a){return this._caseSensitive?Br(a,this._value,0,a.length,this._from,this._to):mn(a,this._value,0,a.length,this._from,this._to)}value(){return this._value.substring(this._from,this._to)}};i(Er,"ConfigKeysIterator");let jr=Er;const so=class so{constructor(a=!0,u=!0){this._splitOnBackslash=a,this._caseSensitive=u,Je(this,"_value"),Je(this,"_from"),Je(this,"_to")}reset(a){return this._value=a.replace(/\\$|\/$/,""),this._from=0,this._to=0,this.next()}hasNext(){return this._to<this._value.length}next(){this._from=this._to;let a=!0;for(;this._to<this._value.length;this._to++){const u=this._value.charCodeAt(this._to);if(u===47||this._splitOnBackslash&&u===92)if(a)this._from++;else break;else a=!1}return this}cmp(a){return this._caseSensitive?Br(a,this._value,0,a.length,this._from,this._to):mn(a,this._value,0,a.length,this._from,this._to)}value(){return this._value.substring(this._from,this._to)}};i(so,"PathIterator");let nr=so;var Wl=(r=>(r[r.Scheme=1]="Scheme",r[r.Authority=2]="Authority",r[r.Path=3]="Path",r[r.Query=4]="Query",r[r.Fragment=5]="Fragment",r))(Wl||{});const ao=class ao{constructor(a){this._ignorePathCasing=a,Je(this,"_pathIterator"),Je(this,"_value"),Je(this,"_states",[]),Je(this,"_stateIdx",0)}reset(a){return this._value=a,this._states=[],this._value.scheme&&this._states.push(1),this._value.authority&&this._states.push(2),this._value.path&&(this._pathIterator=new nr(!1,!this._ignorePathCasing(a)),this._pathIterator.reset(a.path),this._pathIterator.value()&&this._states.push(3)),this._value.query&&this._states.push(4),this._value.fragment&&this._states.push(5),this._stateIdx=0,this}next(){return this._states[this._stateIdx]===3&&this._pathIterator.hasNext()?this._pathIterator.next():this._stateIdx+=1,this}hasNext(){return this._states[this._stateIdx]===3&&this._pathIterator.hasNext()||this._stateIdx<this._states.length-1}cmp(a){if(this._states[this._stateIdx]===1)return Lo(a,this._value.scheme);if(this._states[this._stateIdx]===2)return Lo(a,this._value.authority);if(this._states[this._stateIdx]===3)return this._pathIterator.cmp(a);if(this._states[this._stateIdx]===4)return So(a,this._value.query);if(this._states[this._stateIdx]===5)return So(a,this._value.fragment);throw new Error}value(){if(this._states[this._stateIdx]===1)return this._value.scheme;if(this._states[this._stateIdx]===2)return this._value.authority;if(this._states[this._stateIdx]===3)return this._pathIterator.value();if(this._states[this._stateIdx]===4)return this._value.query;if(this._states[this._stateIdx]===5)return this._value.fragment;throw new Error}};i(ao,"UriIterator");let Ur=ao;function rr(r){const u=r.extensionUri.path,d=u.lastIndexOf(".");return d===-1?!1:u.substr(d+1).length>1}i(rr,"isPreRelease");const br=class br{constructor(){Je(this,"segment"),Je(this,"value"),Je(this,"key"),Je(this,"left"),Je(this,"mid"),Je(this,"right")}isEmpty(){return!this.left&&!this.mid&&!this.right&&!this.value}};i(br,"TernarySearchTreeNode");let en=br;const En=class En{constructor(a){Je(this,"_iter"),Je(this,"_root"),this._iter=a}static forUris(a=()=>!1){return new En(new Ur(a))}static forPaths(){return new En(new nr)}static forStrings(){return new En(new Qt)}static forConfigKeys(){return new En(new jr)}clear(){this._root=void 0}set(a,u){const d=this._iter.reset(a);let c;for(this._root||(this._root=new en,this._root.segment=d.value()),c=this._root;;){const v=d.cmp(c.segment);if(v>0)c.left||(c.left=new en,c.left.segment=d.value()),c=c.left;else if(v<0)c.right||(c.right=new en,c.right.segment=d.value()),c=c.right;else if(d.hasNext())d.next(),c.mid||(c.mid=new en,c.mid.segment=d.value()),c=c.mid;else break}const p=c.value;return c.value=u,c.key=a,p}get(a){var u;return(u=this._getNode(a))==null?void 0:u.value}_getNode(a){const u=this._iter.reset(a);let d=this._root;for(;d;){const c=u.cmp(d.segment);if(c>0)d=d.left;else if(c<0)d=d.right;else if(u.hasNext())u.next(),d=d.mid;else break}return d}has(a){const u=this._getNode(a);return!((u==null?void 0:u.value)===void 0&&(u==null?void 0:u.mid)===void 0)}delete(a){return this._delete(a,!1)}deleteSuperstr(a){return this._delete(a,!0)}_delete(a,u){const d=this._iter.reset(a),c=[];let p=this._root;for(;p;){const v=d.cmp(p.segment);if(v>0)c.push([1,p]),p=p.left;else if(v<0)c.push([-1,p]),p=p.right;else if(d.hasNext())d.next(),c.push([0,p]),p=p.mid;else{for(u?(p.left=void 0,p.mid=void 0,p.right=void 0):p.value=void 0;c.length>0&&p.isEmpty();){let[y,x]=c.pop();switch(y){case 1:x.left=void 0;break;case 0:x.mid=void 0;break;case-1:x.right=void 0;break}p=x}break}}}findSubstr(a){const u=this._iter.reset(a);let d=this._root,c;for(;d;){const p=u.cmp(d.segment);if(p>0)d=d.left;else if(p<0)d=d.right;else if(u.hasNext())u.next(),c=d.value||c,d=d.mid;else break}return d&&d.value||c}findSuperstr(a){const u=this._iter.reset(a);let d=this._root;for(;d;){const c=u.cmp(d.segment);if(c>0)d=d.left;else if(c<0)d=d.right;else if(u.hasNext())u.next(),d=d.mid;else return d.mid?this._entries(d.mid):void 0}}forEach(a){for(const[u,d]of this)a(d,u)}*[Symbol.iterator](){yield*this._entries(this._root)}*_entries(a){a&&(yield*this._entries(a.left),a.value&&(yield[a.key,a.value]),yield*this._entries(a.mid),yield*this._entries(a.right))}};i(En,"TernarySearchTree");let Ln=En;async function Ea(r,a,u){const d=[];r.replace(a,(v,...y)=>{const x=u(v,...y);return d.push(x),""});const c=await Promise.all(d);let p=0;return r.replace(a,()=>c[p++])}i(Ea,"stringReplaceAsync");async function No(r,a){for(let u=0;u<r.length;u++)if(await a(r[u],u,r))return u;return-1}i(No,"arrayFindIndexAsync");async function Ni(r,a,u){const d=Math.ceil(r.length/a);for(let c=0;c<d;c++){const p=r.slice(c*a,(c+1)*a);await Promise.all(p.map(u))}}i(Ni,"batchPromiseAll");function Zl(r){return r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}i(Zl,"escapeRegExp");function Ro(r,a,u="..."){return r.length<=a?r:`${r.substr(0,a)}${u}`}i(Ro,"truncate");const Pt=i(({date:r,href:a})=>{const[u,d]=(0,l.useState)(er(r)),c=typeof r=="string"?new Date(r).toLocaleString():r.toLocaleString();return(0,l.useEffect)(()=>{d(er(r));const v=i(()=>{const F=Date.now(),G=typeof r=="string"?new Date(r).getTime():r.getTime(),fe=(F-G)/(1e3*60);return fe<1?2e4:fe<60?2*6e4:fe<60*24?10*6e4:null},"getUpdateInterval")();if(v===null)return;let y;const x=i(()=>{document.visibilityState==="visible"&&d(er(r))},"updateTimeString"),T=i(()=>{y=window.setInterval(x,v)},"startInterval"),q=i(()=>{document.visibilityState==="visible"?(d(er(r)),y&&clearInterval(y),T()):y&&clearInterval(y)},"handleVisibilityChange");return T(),document.addEventListener("visibilitychange",q),()=>{y&&clearInterval(y),document.removeEventListener("visibilitychange",q)}},[r]),a?l.createElement("a",{href:a,className:"timestamp",title:c},u):l.createElement("div",{className:"timestamp",title:c},u)},"Timestamp"),ql=null;var Ri=(r=>(r[r.Query=0]="Query",r[r.All=1]="All",r[r.LocalPullRequest=2]="LocalPullRequest",r))(Ri||{}),Po=(r=>(r.Approve="APPROVE",r.RequestChanges="REQUEST_CHANGES",r.Comment="COMMENT",r))(Po||{}),xt=(r=>(r.Open="OPEN",r.Merged="MERGED",r.Closed="CLOSED",r))(xt||{}),vt=(r=>(r[r.Mergeable=0]="Mergeable",r[r.NotMergeable=1]="NotMergeable",r[r.Conflict=2]="Conflict",r[r.Unknown=3]="Unknown",r[r.Behind=4]="Behind",r))(vt||{}),pn=(r=>(r[r.AwaitingChecks=0]="AwaitingChecks",r[r.Locked=1]="Locked",r[r.Mergeable=2]="Mergeable",r[r.Queued=3]="Queued",r[r.Unmergeable=4]="Unmergeable",r))(pn||{}),Wr=(r=>(r.User="User",r.Organization="Organization",r.Mannequin="Mannequin",r.Bot="Bot",r))(Wr||{});function Kt(r){switch(r){case"Organization":return"Organization";case"Mannequin":return"Mannequin";case"Bot":return"Bot";default:return"User"}}i(Kt,"toAccountType");function Yt(r){var a;return zt(r)?r.id:(a=r.specialDisplayName)!=null?a:r.login}i(Yt,"reviewerId");function Bt(r){var a,u,d;return zt(r)?(u=(a=r.name)!=null?a:r.slug)!=null?u:r.id:(d=r.specialDisplayName)!=null?d:r.login}i(Bt,"reviewerLabel");function zt(r){return!!r.org}i(zt,"isITeam");function Zr(r){const a=r;return!!a.isAuthor&&!!a.isCommenter}i(Zr,"isISuggestedReviewer");var or=(r=>(r.Issue="Issue",r.PullRequest="PullRequest",r))(or||{}),tt=(r=>(r.Success="success",r.Failure="failure",r.Neutral="neutral",r.Pending="pending",r.Unknown="unknown",r))(tt||{});const qr=i(({for:r})=>l.createElement(l.Fragment,null,r.avatarUrl&&r.avatarUrl.includes("githubusercontent.com")?l.createElement("img",{className:"avatar",src:r.avatarUrl,alt:"",role:"presentation","aria-hidden":"true"}):l.createElement(I,{className:"avatar-icon",src:te(8440)})),"InnerAvatar"),St=i(({for:r,link:a=!0,substituteIcon:u})=>a?l.createElement("a",{className:"avatar-link",href:r.url,title:r.url,"aria-hidden":"true"},u!=null?u:l.createElement(qr,{for:r})):u!=null?u:l.createElement(qr,{for:r}),"Avatar"),Ct=i(({for:r,text:a=Bt(r)})=>l.createElement("a",{className:"author-link",href:r.url,"aria-label":a,title:r.url},a),"AuthorLink");var je=(r=>(r[r.Committed=0]="Committed",r[r.Mentioned=1]="Mentioned",r[r.Subscribed=2]="Subscribed",r[r.Commented=3]="Commented",r[r.Reviewed=4]="Reviewed",r[r.NewCommitsSinceReview=5]="NewCommitsSinceReview",r[r.Labeled=6]="Labeled",r[r.Milestoned=7]="Milestoned",r[r.Assigned=8]="Assigned",r[r.Unassigned=9]="Unassigned",r[r.HeadRefDeleted=10]="HeadRefDeleted",r[r.Merged=11]="Merged",r[r.CrossReferenced=12]="CrossReferenced",r[r.Closed=13]="Closed",r[r.Reopened=14]="Reopened",r[r.CopilotStarted=15]="CopilotStarted",r[r.CopilotFinished=16]="CopilotFinished",r[r.CopilotFinishedError=17]="CopilotFinishedError",r[r.Other=18]="Other",r))(je||{}),qe=(r=>(r.Comment="comment",r.Approve="approve",r.RequestChanges="requestChanges",r))(qe||{}),ir=(r=>(r[r.None=0]="None",r[r.Available=1]="Available",r[r.ReviewedWithComments=2]="ReviewedWithComments",r[r.ReviewedWithoutComments=3]="ReviewedWithoutComments",r))(ir||{});function Pi(r){var a,u;const d=(a=r.submittedAt)!=null?a:r.createdAt,c=d&&Date.now()-new Date(d).getTime()<1e3*60,p=(u=r.state)!=null?u:r.event===je.Commented?"COMMENTED":void 0;let v="";if(c)switch(p){case"APPROVED":v="Pull request approved";break;case"CHANGES_REQUESTED":v="Changes requested on pull request";break;case"COMMENTED":v="Commented on pull request";break}return v}i(Pi,"ariaAnnouncementForReview");var Ql=Object.defineProperty,Qr=i((r,a,u)=>a in r?Ql(r,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[a]=u,"message_defNormalProp"),Kr=i((r,a,u)=>Qr(r,typeof a!="symbol"?a+"":a,u),"message_publicField");const lr=acquireVsCodeApi(),Bn=class Bn{constructor(a){Kr(this,"_commandHandler"),Kr(this,"lastSentReq"),Kr(this,"pendingReplies"),this._commandHandler=a,this.lastSentReq=0,this.pendingReplies=Object.create(null),window.addEventListener("message",this.handleMessage.bind(this))}registerCommandHandler(a){this._commandHandler=a}async postMessage(a){const u=String(++this.lastSentReq);return new Promise((d,c)=>{this.pendingReplies[u]={resolve:d,reject:c},a=Object.assign(a,{req:u}),lr.postMessage(a)})}handleMessage(a){const u=a.data;if(u.seq){const d=this.pendingReplies[u.seq];if(d){u.err?d.reject(u.err):d.resolve(u.res);return}}this._commandHandler&&this._commandHandler(u.res)}};i(Bn,"MessageHandler");let hn=Bn;function Oi(r){return new hn(r)}i(Oi,"getMessageHandler");function Yr(){return lr.getState()}i(Yr,"getState");function Di(r){const a=Yr();a&&a.number&&a.number===(r==null?void 0:r.number)&&(r.pendingCommentText=a.pendingCommentText),r&&lr.setState(r)}i(Di,"setState");function Oo(r){const a=lr.getState();lr.setState(Object.assign(a,r))}i(Oo,"updateState");var Kl=Object.defineProperty,Do=i((r,a,u)=>a in r?Kl(r,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[a]=u,"context_defNormalProp"),ve=i((r,a,u)=>Do(r,typeof a!="symbol"?a+"":a,u),"context_publicField");const sr=(bn=class{constructor(a=Yr(),u=null,d=null){this.pr=a,this.onchange=u,this._handler=d,ve(this,"setTitle",async c=>{const p=await this.postMessage({command:"pr.edit-title",args:{text:c}});this.updatePR({titleHTML:p.titleHTML})}),ve(this,"setDescription",c=>this.postMessage({command:"pr.edit-description",args:{text:c}})),ve(this,"checkout",()=>this.postMessage({command:"pr.checkout"})),ve(this,"openChanges",c=>this.postMessage({command:"pr.open-changes",args:{openToTheSide:c}})),ve(this,"copyPrLink",()=>this.postMessage({command:"pr.copy-prlink"})),ve(this,"copyVscodeDevLink",()=>this.postMessage({command:"pr.copy-vscodedevlink"})),ve(this,"cancelCodingAgent",c=>this.postMessage({command:"pr.cancel-coding-agent",args:c})),ve(this,"exitReviewMode",async()=>{if(this.pr)return this.postMessage({command:"pr.checkout-default-branch",args:this.pr.repositoryDefaultBranch})}),ve(this,"gotoChangesSinceReview",()=>this.postMessage({command:"pr.gotoChangesSinceReview"})),ve(this,"refresh",async()=>{this.pr&&(this.pr.busy=!0),this.updatePR(this.pr),await this.postMessage({command:"pr.refresh"}),this.pr&&(this.pr.busy=!1),this.updatePR(this.pr)}),ve(this,"checkMergeability",()=>this.postMessage({command:"pr.checkMergeability"})),ve(this,"changeEmail",async c=>{const p=await this.postMessage({command:"pr.change-email",args:c});this.updatePR({emailForCommit:p})}),ve(this,"merge",async c=>await this.postMessage({command:"pr.merge",args:c})),ve(this,"openOnGitHub",()=>this.postMessage({command:"pr.openOnGitHub"})),ve(this,"deleteBranch",()=>this.postMessage({command:"pr.deleteBranch"})),ve(this,"revert",async()=>{this.updatePR({busy:!0});const c=await this.postMessage({command:"pr.revert"});this.updatePR({busy:!1,...c})}),ve(this,"readyForReview",()=>this.postMessage({command:"pr.readyForReview"})),ve(this,"readyForReviewAndMerge",c=>this.postMessage({command:"pr.readyForReviewAndMerge",args:c})),ve(this,"addReviewers",()=>this.postMessage({command:"pr.change-reviewers"})),ve(this,"changeProjects",()=>this.postMessage({command:"pr.change-projects"})),ve(this,"removeProject",c=>this.postMessage({command:"pr.remove-project",args:c})),ve(this,"addMilestone",()=>this.postMessage({command:"pr.add-milestone"})),ve(this,"removeMilestone",()=>this.postMessage({command:"pr.remove-milestone"})),ve(this,"addAssignees",()=>this.postMessage({command:"pr.change-assignees"})),ve(this,"addAssigneeYourself",()=>this.postMessage({command:"pr.add-assignee-yourself"})),ve(this,"addAssigneeCopilot",()=>this.postMessage({command:"pr.add-assignee-copilot"})),ve(this,"addLabels",()=>this.postMessage({command:"pr.add-labels"})),ve(this,"create",()=>this.postMessage({command:"pr.open-create"})),ve(this,"deleteComment",async c=>{await this.postMessage({command:"pr.delete-comment",args:c});const{pr:p}=this;if(!p)throw new Error("Unexpectedly no pull request when trying to delete comment");const{id:v,pullRequestReviewId:y}=c;if(!y){this.updatePR({events:p.events.filter(q=>q.id!==v)});return}const x=p.events.findIndex(q=>q.id===y);if(x===-1){console.error("Could not find review:",y);return}const T=p.events[x];if(!T.comments){console.error("No comments to delete for review:",y,T);return}p.events.splice(x,1,{...T,comments:T.comments.filter(q=>q.id!==v)}),this.updatePR(p)}),ve(this,"editComment",c=>this.postMessage({command:"pr.edit-comment",args:c})),ve(this,"updateDraft",(c,p)=>{const y=Yr().pendingCommentDrafts||Object.create(null);p!==y[c]&&(y[c]=p,this.updatePR({pendingCommentDrafts:y}))}),ve(this,"requestChanges",c=>this.submitReviewCommand("pr.request-changes",c)),ve(this,"approve",c=>this.submitReviewCommand("pr.approve",c)),ve(this,"submit",c=>this.submitReviewCommand("pr.submit",c)),ve(this,"deleteReview",async()=>{var c;try{const p=await this.postMessage({command:"pr.delete-review"}),v=this.pr,y=(c=v==null?void 0:v.events.filter(x=>!(x.event===je.Reviewed&&x.id===p.deletedReviewId)))!=null?c:[];return v&&y.length<v.events.length&&(v.busy=!1,v.pendingCommentText="",v.pendingCommentDrafts={},v.events=y,this.updatePR(v)),p}catch{return this.updatePR({busy:!1})}}),ve(this,"close",async c=>{const{pr:p}=this;if(!p)throw new Error("Unexpectedly no pull request when trying to close");try{const v=await this.postMessage({command:"pr.close",args:c});let y=[...p.events];v.commentEvent&&y.push(v.commentEvent),v.closeEvent&&y.push(v.closeEvent),this.updatePR({events:y,pendingCommentText:"",state:v.state})}catch{}}),ve(this,"removeLabel",async c=>{const{pr:p}=this;if(!p)throw new Error("Unexpectedly no pull request when trying to remove label");await this.postMessage({command:"pr.remove-label",args:c});const v=p.labels.filter(y=>y.name!==c);this.updatePR({labels:v})}),ve(this,"applyPatch",async c=>{this.postMessage({command:"pr.apply-patch",args:{comment:c}})}),ve(this,"reRequestReview",async c=>{const{pr:p}=this;if(!p)throw new Error("Unexpectedly no pull request when trying to re-request review");const{reviewers:v}=await this.postMessage({command:"pr.re-request-review",args:c});p.reviewers=v,this.updatePR(p)}),ve(this,"updateBranch",async()=>{var c,p;const{pr:v}=this;if(!v)throw new Error("Unexpectedly no pull request when trying to update branch");const y=await this.postMessage({command:"pr.update-branch"});v.events=(c=y.events)!=null?c:v.events,v.mergeable=(p=y.mergeable)!=null?p:v.mergeable,this.updatePR(v)}),ve(this,"dequeue",async()=>{const{pr:c}=this;if(!c)throw new Error("Unexpectedly no pull request when trying to dequeue");await this.postMessage({command:"pr.dequeue"})&&(c.mergeQueueEntry=void 0),this.updatePR(c)}),ve(this,"enqueue",async()=>{const{pr:c}=this;if(!c)throw new Error("Unexpectedly no pull request when trying to enqueue");const p=await this.postMessage({command:"pr.enqueue"});p.mergeQueueEntry&&(c.mergeQueueEntry=p.mergeQueueEntry),this.updatePR(c)}),ve(this,"openDiff",c=>this.postMessage({command:"pr.open-diff",args:{comment:c}})),ve(this,"toggleResolveComment",(c,p,v)=>{this.postMessage({command:"pr.resolve-comment-thread",args:{threadId:c,toResolve:v,thread:p}}).then(y=>{y?this.updatePR({events:y}):this.refresh()})}),ve(this,"openSessionLog",c=>this.postMessage({command:"pr.open-session-log",args:{link:c}})),ve(this,"openCommitChanges",async c=>{this.updatePR({loadingCommit:c});try{const p={commitSha:c};await this.postMessage({command:"pr.openCommitChanges",args:p})}finally{this.updatePR({loadingCommit:void 0})}}),ve(this,"setPR",c=>(this.pr=c,Di(this.pr),this.onchange&&this.onchange(this.pr),this)),ve(this,"updatePR",c=>(Oo(c),this.pr=this.pr?{...this.pr,...c}:c,this.onchange&&this.onchange(this.pr),this)),ve(this,"handleMessage",c=>{var p;switch(c.command){case"pr.clear":this.setPR(void 0);return;case"pr.initialize":return this.setPR(c.pullrequest);case"update-state":return this.updatePR({state:c.state});case"pr.update-checkout-status":return this.updatePR({isCurrentlyCheckedOut:c.isCurrentlyCheckedOut});case"pr.deleteBranch":const v={};return c.branchTypes&&c.branchTypes.map(x=>{x==="local"?v.isLocalHeadDeleted=!0:(x==="remote"||x==="upstream")&&(v.isRemoteHeadDeleted=!0)}),this.updatePR(v);case"pr.enable-exit":return this.updatePR({isCurrentlyCheckedOut:!0});case"set-scroll":window.scrollTo(c.scrollPosition.x,c.scrollPosition.y);return;case"pr.scrollToPendingReview":const y=(p=document.getElementById("pending-review"))!=null?p:document.getElementById("comment-textarea");y&&(y.scrollIntoView(),y.focus());return;case"pr.submitting-review":return this.updatePR({busy:!0,lastReviewType:c.lastReviewType});case"pr.append-review":return this.appendReview(c);case"pr.readying-for-review":return this.updatePR({busy:!0});case"pr.readied-for-review":return this.readyForReviewComplete(c)}}),d||(this._handler=Oi(this.handleMessage))}async submitReviewCommand(a,u){try{const d=await this.postMessage({command:a,args:u});return this.appendReview(d)}catch{return this.updatePR({busy:!1})}}appendReview(a){const{pr:u}=this;if(!u)throw new Error("Unexpectedly no pull request when trying to append review");const{events:d,reviewers:c,reviewedEvent:p}=a;if(u.busy=!1,!d){this.updatePR(u);return}c&&(u.reviewers=c),u.events=d.length===0?[...u.events,p]:d,p.event===je.Reviewed&&(u.currentUserReviewState=p.state),u.pendingCommentText="",u.pendingReviewType=void 0,this.updatePR(u)}readyForReviewComplete(a){const{pr:u}=this;if(!u)throw new Error("Unexpectedly no pull request when trying to ready for review");const{isDraft:d,reviewEvent:c,reviewers:p}=a;if(u.busy=!1,u.isDraft=d,!c){this.updatePR(u);return}p&&(u.reviewers=p),u.events=[...u.events,c],c.event===je.Reviewed&&(u.currentUserReviewState=c.state),a.autoMerge!==void 0&&(u.autoMerge=a.autoMerge,u.autoMergeMethod=u.defaultMergeMethod),this.updatePR(u)}async updateAutoMerge({autoMerge:a,autoMergeMethod:u}){const{pr:d}=this;if(!d)throw new Error("Unexpectedly no pull request when trying to update auto merge");const c=await this.postMessage({command:"pr.update-automerge",args:{autoMerge:a,autoMergeMethod:u}});d.autoMerge=c.autoMerge,d.autoMergeMethod=c.autoMergeMethod,this.updatePR(d)}postMessage(a){var u,d;return(d=(u=this._handler)==null?void 0:u.postMessage(a))!=null?d:Promise.resolve(void 0)}},i(bn,"_PRContext"),bn);ve(sr,"instance",new sr);let Yl=sr;const Ae=(0,l.createContext)(Yl.instance);var Ye=te(7007);const Tn=new Ye.EventEmitter;function Ao(r){const[a,u]=(0,l.useState)(r);return(0,l.useEffect)(()=>{a!==r&&u(r)},[r]),[a,u]}i(Ao,"useStateProp");const Gl=i(({authorAssociation:r},a=u=>`(${u.toLowerCase()})`)=>r.toLowerCase()==="user"?a("you"):r&&r!=="NONE"?a(r):null,"association");function gn(r){var a;const{isPRDescription:u,children:d,comment:c,headerInEditMode:p}=r,{bodyHTML:v,body:y}=c,x=(a=c.id)!=null?a:-1,T=!!c.canEdit,q=!!c.canDelete,F=c.pullRequestReviewId,[G,fe]=Ao(y),[Q,de]=Ao(v),{deleteComment:le,editComment:Se,setDescription:be,pr:Te}=(0,l.useContext)(Ae),Le=(Te==null?void 0:Te.pendingCommentDrafts)&&Te.pendingCommentDrafts[x],[et,we]=(0,l.useState)(!!Le),[Ue,Ke]=(0,l.useState)(!1),Tt=c.htmlUrl||c.url;if(et)return l.cloneElement(p?l.createElement(Io,{for:c}):l.createElement(l.Fragment,null),{},[l.createElement(Jl,{id:x,key:`editComment${x}`,body:Le||G,onCancel:i(()=>{Te!=null&&Te.pendingCommentDrafts&&delete Te.pendingCommentDrafts[x],we(!1)},"onCancel"),onSave:i(async dt=>{try{const Nt=u?await be(dt):await Se({comment:c,text:dt});de(Nt.bodyHTML),fe(dt)}finally{we(!1)}},"onSave")})]);const ct=c.event===je.Commented||c.event===je.Reviewed?Pi(c):void 0;return l.createElement(Io,{for:c,onMouseEnter:i(()=>Ke(!0),"onMouseEnter"),onMouseLeave:i(()=>Ke(!1),"onMouseLeave"),onFocus:i(()=>Ke(!0),"onFocus")},ct?l.createElement("div",{role:"alert","aria-label":ct}):null,l.createElement("div",{className:"action-bar comment-actions",style:{display:Ue?"flex":"none"}},l.createElement("button",{title:"Quote reply",className:"icon-button",onClick:i(()=>Tn.emit("quoteReply",G),"onClick")},Ze),Tt?l.createElement("button",{title:"Copy Comment Link",className:"icon-button",onClick:i(()=>navigator.clipboard.writeText(Tt),"onClick")},He):null,T?l.createElement("button",{title:"Edit comment",className:"icon-button",onClick:i(()=>we(!0),"onClick")},Ge):null,q?l.createElement("button",{title:"Delete comment",className:"icon-button",onClick:i(()=>le({id:x,pullRequestReviewId:F}),"onClick")},wt):null),l.createElement(Fo,{comment:c,bodyHTML:Q,body:G,canApplyPatch:!!(Te!=null&&Te.isCurrentlyCheckedOut),allowEmpty:!!r.allowEmpty,specialDisplayBodyPostfix:c.specialDisplayBodyPostfix}),d)}i(gn,"CommentView");function Nn(r){return r.authorAssociation!==void 0}i(Nn,"isReviewEvent");function ar(r){return r&&typeof r=="object"&&typeof r.body=="string"&&typeof r.diffHunk=="string"}i(ar,"isIComment");const Xl={REQUESTED:"will review",PENDING:"will review",COMMENTED:"reviewed",CHANGES_REQUESTED:"requested changes",APPROVED:"approved"},Ai=i(r=>Xl[r],"reviewDescriptor");function Io({for:r,onFocus:a,onMouseEnter:u,onMouseLeave:d,children:c}){var p,v,y,x,T;const q=r,F=(p=q.htmlUrl)!=null?p:r.url,G=(y=ar(r)&&r.isDraft)!=null?y:Nn(r)&&((v=r.state)==null?void 0:v.toLocaleUpperCase())==="PENDING",fe=(x=q.user)!=null?x:r.author,Q=(T=r.createdAt)!=null?T:r.submittedAt;return l.createElement("div",{className:"comment-container comment review-comment",onFocus:a,onMouseEnter:u,onMouseLeave:d},l.createElement("div",{className:"review-comment-container"},l.createElement("h3",{className:`review-comment-header${Nn(r)&&r.comments.length>0?"":" no-details"}`},l.createElement(Fr,null,l.createElement(St,{for:fe}),l.createElement(Ct,{for:fe}),Nn(r)?Gl(r):null,Q?l.createElement(l.Fragment,null,Nn(r)&&r.state?Ai(r.state):"commented",lt,l.createElement(Pt,{href:F,date:Q})):l.createElement("em",null,"pending"),G?l.createElement(l.Fragment,null,l.createElement("span",{className:"pending-label"},"Pending")):null)),c))}i(Io,"CommentBox");function Jl({id:r,body:a,onCancel:u,onSave:d}){const{updateDraft:c}=(0,l.useContext)(Ae),p=(0,l.useRef)({body:a,dirty:!1}),v=(0,l.useRef)();(0,l.useEffect)(()=>{const F=setInterval(()=>{p.current.dirty&&(c(r,p.current.body),p.current.dirty=!1)},500);return()=>clearInterval(F)},[p]);const y=(0,l.useCallback)(async()=>{const{markdown:F,submitButton:G}=v.current;G.disabled=!0;try{await d(F.value)}finally{G.disabled=!1}},[v,d]),x=(0,l.useCallback)(F=>{F.preventDefault(),y()},[y]),T=(0,l.useCallback)(F=>{(F.metaKey||F.ctrlKey)&&F.key==="Enter"&&(F.preventDefault(),y())},[y]),q=(0,l.useCallback)(F=>{p.current.body=F.target.value,p.current.dirty=!0},[p]);return l.createElement("form",{ref:v,onSubmit:x},l.createElement("textarea",{name:"markdown",defaultValue:a,onKeyDown:T,onInput:q}),l.createElement("div",{className:"form-actions"},l.createElement("button",{className:"secondary",onClick:u},"Cancel"),l.createElement("button",{type:"submit",name:"submitButton"},"Save")))}i(Jl,"EditComment");const Fo=i(({comment:r,bodyHTML:a,body:u,canApplyPatch:d,allowEmpty:c,specialDisplayBodyPostfix:p})=>{var v,y;if(!u&&!a)return c?null:l.createElement("div",{className:"comment-body"},l.createElement("em",null,"No description provided."));const{applyPatch:x}=(0,l.useContext)(Ae),T=l.createElement("div",{dangerouslySetInnerHTML:{__html:a!=null?a:""}}),F=((y=(v=u||a)==null?void 0:v.indexOf("```diff"))!=null?y:-1)>-1&&d&&r?l.createElement("button",{onClick:i(()=>x(r),"onClick")},"Apply Patch"):l.createElement(l.Fragment,null);return l.createElement("div",{className:"comment-body"},T,F,p?l.createElement("br",null):null,p?l.createElement("em",null,p):null,l.createElement(Ho,{reactions:r==null?void 0:r.reactions}))},"CommentBody"),Ho=i(({reactions:r})=>{if(!Array.isArray(r)||r.length===0)return null;const a=r.filter(u=>u.count>0);return a.length===0?null:l.createElement("div",{className:"comment-reactions",style:{marginTop:6}},a.map((u,d)=>{const p=u.reactors||[],v=p.slice(0,10),y=p.length>10?p.length-10:0;let x="";return v.length>0&&(y>0?x=`${Vo(v)} and ${y} more reacted with ${u.label}`:x=`${Vo(v)} reacted with ${u.label}`),l.createElement("div",{key:u.label+d,title:x},l.createElement("span",{className:"reaction-label"},u.label),lt,u.count>1?l.createElement("span",{className:"reaction-count"},u.count):null)}))},"CommentReactions");function Ii({pendingCommentText:r,isCopilotOnMyBehalf:a,state:u,hasWritePermission:d,isIssue:c,isAuthor:p,continueOnGitHub:v,currentUserReviewState:y,lastReviewType:x,busy:T,hasReviewDraft:q}){const{updatePR:F,requestChanges:G,approve:fe,close:Q,openOnGitHub:de,submit:le}=(0,l.useContext)(Ae),[Se,be]=(0,l.useState)(!1),Te=(0,l.useRef)(),Le=(0,l.useRef)();Tn.addListener("quoteReply",ze=>{var Dt,zn;const al=ze.replace(/\n/g,`
> `);F({pendingCommentText:`> ${al} 

`}),(Dt=Le.current)==null||Dt.scrollIntoView(),(zn=Le.current)==null||zn.focus()});const et=i(ze=>{ze.preventDefault();const{value:Dt}=Le.current;Q(Dt)},"closeButton");let we=x!=null?x:y==="APPROVED"?qe.Approve:y==="CHANGES_REQUESTED"?qe.RequestChanges:qe.Comment;async function Ue(ze){const{value:Dt}=Le.current;if(v&&ze!==qe.Comment){await de();return}switch(be(!0),ze){case qe.RequestChanges:await G(Dt);break;case qe.Approve:await fe(Dt);break;default:await le(Dt)}be(!1)}i(Ue,"submitAction");const Ke=(0,l.useCallback)(ze=>{(ze.metaKey||ze.ctrlKey)&&ze.key==="Enter"&&Ue(we)},[le]);async function Tt(){await Ue(we)}i(Tt,"defaultSubmitAction");const ct=p?{[qe.Comment]:"Comment"}:v?{[qe.Comment]:"Comment",[qe.Approve]:"Approve on github.com",[qe.RequestChanges]:"Request changes on github.com"}:jt(c),dt=!(r!=null&&r.trim())&&!q,Nt=!1;return l.createElement("form",{id:"comment-form",ref:Te,className:"comment-form main-comment-form"},l.createElement("textarea",{id:"comment-textarea",name:"body",ref:Le,onInput:i(({target:ze})=>F({pendingCommentText:ze.value}),"onInput"),onKeyDown:Ke,value:r,placeholder:"Leave a comment",onClick:i(()=>{var ze;!r&&a&&!((ze=Le.current)!=null&&ze.textContent)&&(Le.current.textContent="@copilot ",Le.current.setSelectionRange(9,9))},"onClick")}),l.createElement("div",{className:"form-actions"},d||p?l.createElement("button",{id:"close",className:"secondary",disabled:Se||u!==xt.Open,onClick:et,"data-command":"close"},c?"Close Issue":"Close Pull Request"):null,l.createElement(Ir,{optionsContext:i(()=>$o(ct,r,dt),"optionsContext"),defaultAction:Tt,defaultOptionLabel:i(()=>ct[we],"defaultOptionLabel"),defaultOptionValue:i(()=>we,"defaultOptionValue"),allOptions:i(()=>{const ze=[];return ct.comment&&ze.push({label:ct[qe.Comment],value:qe.Comment,action:i(()=>Ue(qe.Comment),"action"),optionDisabled:dt}),ct.approve&&ze.push({label:ct[qe.Approve],value:qe.Approve,action:i(()=>Ue(qe.Approve),"action"),optionDisabled:Nt}),ct.requestChanges&&ze.push({label:ct[qe.RequestChanges],value:qe.RequestChanges,action:i(()=>Ue(qe.RequestChanges),"action"),optionDisabled:dt}),ze},"allOptions"),optionsTitle:"Submit pull request review",disabled:Se||T,hasSingleAction:Object.keys(ct).length===1,spreadable:!0,primaryOptionValue:qe.Comment})))}i(Ii,"AddComment");function jt(r){return r?ur:cr}i(jt,"commentMethods");const ur={comment:"Comment"},cr={...ur,approve:"Approve",requestChanges:"Request Changes"},$o=i((r,a,u)=>{const d={preventDefaultContextMenuItems:!0,"github:reviewCommentMenu":!0};return r.approve&&(r.approve===cr.approve?d["github:reviewCommentApprove"]=!0:d["github:reviewCommentApproveOnDotCom"]=!0),r.comment&&(d["github:reviewCommentComment"]=!0,u||(d["github:reviewCommentCommentEnabled"]=!0)),r.requestChanges&&(r.requestChanges===cr.requestChanges?(d["github:reviewCommentRequestChanges"]=!0,u||(d["github:reviewRequestChangesEnabled"]=!0)):d["github:reviewCommentRequestChangesOnDotCom"]=!0),d.body=a!=null?a:"",JSON.stringify(d)},"makeCommentMenuContext"),es=i(r=>{var a,u,d;const{updatePR:c,requestChanges:p,approve:v,submit:y,openOnGitHub:x}=useContext(PullRequestContext),[T,q]=useState(!1),F=useRef();let G=(a=r.lastReviewType)!=null?a:r.currentUserReviewState==="APPROVED"?ReviewType.Approve:r.currentUserReviewState==="CHANGES_REQUESTED"?ReviewType.RequestChanges:ReviewType.Comment;async function fe(Le){const{value:et}=F.current;if(r.continueOnGitHub&&Le!==ReviewType.Comment){await x();return}switch(q(!0),Le){case ReviewType.RequestChanges:await p(et);break;case ReviewType.Approve:await v(et);break;default:await y(et)}q(!1)}i(fe,"submitAction");async function Q(){await fe(G)}i(Q,"defaultSubmitAction");const de=i(Le=>{c({pendingCommentText:Le.target.value})},"onChangeTextarea"),le=useCallback(Le=>{(Le.metaKey||Le.ctrlKey)&&Le.key==="Enter"&&(Le.preventDefault(),Q())},[fe]),Se=r.isAuthor?{comment:"Comment"}:r.continueOnGitHub?{comment:"Comment",approve:"Approve on github.com",requestChanges:"Request changes on github.com"}:jt(r.isIssue),be=!((u=r.pendingCommentText)!=null&&u.trim())&&!r.hasReviewDraft,Te=!1;return React.createElement("span",{className:"comment-form"},React.createElement("textarea",{id:"comment-textarea",name:"body",placeholder:"Leave a comment",ref:F,value:(d=r.pendingCommentText)!=null?d:"",onChange:de,onKeyDown:le,disabled:T||r.busy}),React.createElement("div",{className:"comment-button"},React.createElement(ContextDropdown,{optionsContext:i(()=>$o(Se,r.pendingCommentText,be),"optionsContext"),defaultAction:Q,defaultOptionLabel:i(()=>Se[G],"defaultOptionLabel"),defaultOptionValue:i(()=>G,"defaultOptionValue"),allOptions:i(()=>{const Le=[];return Se.comment&&Le.push({label:Se[ReviewType.Comment],value:ReviewType.Comment,action:i(()=>fe(ReviewType.Comment),"action"),optionDisabled:be}),Se.approve&&Le.push({label:Se[ReviewType.Approve],value:ReviewType.Approve,action:i(()=>fe(ReviewType.Approve),"action"),optionDisabled:Te}),Se.requestChanges&&Le.push({label:Se[ReviewType.RequestChanges],value:ReviewType.RequestChanges,action:i(()=>fe(ReviewType.RequestChanges),"action"),optionDisabled:be}),Le},"allOptions"),optionsTitle:"Submit pull request review",disabled:T||r.busy,hasSingleAction:Object.keys(Se).length===1,spreadable:!0,primaryOptionValue:ReviewType.Comment})))},"AddCommentSimple");function Vo(r){return r.length===0?"":r.length===1?r[0]:r.length===2?`${r[0]} and ${r[1]}`:`${r.slice(0,-1).join(", ")} and ${r[r.length-1]}`}i(Vo,"joinWithAnd");const Fi="copilot-swe-agent",Hi="copilot-cloud-agent",$i="copilot-pull-request-reviewer",ts="BOT_kgDOCnlnWA",Bo=[$i,Fi,"Copilot"];var vn=(r=>(r[r.None=0]="None",r[r.Started=1]="Started",r[r.Completed=2]="Completed",r[r.Failed=3]="Failed",r))(vn||{});function dr(r){if(!r)return 0;switch(r.event){case je.CopilotStarted:return 1;case je.CopilotFinished:return 2;case je.CopilotFinishedError:return 3;default:return 0}}i(dr,"copilotEventToStatus");function zo(r){for(let a=r.length-1;a>=0;a--)if(dr(r[a])!==0)return r[a]}i(zo,"mostRecentCopilotEvent");function Vi({canEdit:r,state:a,head:u,base:d,title:c,titleHTML:p,number:v,url:y,author:x,isCurrentlyCheckedOut:T,isDraft:q,isIssue:F,repositoryDefaultBranch:G,events:fe,owner:Q,repo:de,busy:le,stateReason:Se}){const[be,Te]=Ao(c),[Le,et]=(0,l.useState)(!1),we=zo(fe);return l.createElement(l.Fragment,null,l.createElement(jo,{title:be,titleHTML:p,number:v,url:y,inEditMode:Le,setEditMode:et,setCurrentTitle:Te,canEdit:r,owner:Q,repo:de}),l.createElement(Rn,{state:a,stateReason:Se,head:u,base:d,author:x,isIssue:F,isDraft:q,codingAgentEvent:we}),l.createElement("div",{className:"header-actions"},l.createElement(Uo,{isCurrentlyCheckedOut:T,isIssue:F,repositoryDefaultBranch:G,owner:Q,repo:de,number:v,busy:le}),l.createElement(ns,{canEdit:r,codingAgentEvent:we})))}i(Vi,"Header");function jo({title:r,titleHTML:a,number:u,url:d,inEditMode:c,setEditMode:p,setCurrentTitle:v,canEdit:y,owner:x,repo:T}){const{setTitle:q,copyPrLink:F}=(0,l.useContext)(Ae),G=l.createElement("form",{className:"editing-form title-editing-form",onSubmit:i(async le=>{le.preventDefault();try{const be=le.currentTarget.elements[0],Te=be?be.value:"";await q(Te),v(Te)}finally{p(!1)}},"onSubmit")},l.createElement("input",{type:"text",style:{width:"100%"},defaultValue:r}),l.createElement("div",{className:"form-actions"},l.createElement("button",{type:"button",className:"secondary",onClick:i(()=>p(!1),"onClick")},"Cancel"),l.createElement("button",{type:"submit"},"Update"))),fe={preventDefaultContextMenuItems:!0,owner:x,repo:T,number:u};fe["github:copyMenu"]=!0;const Q=l.createElement("div",{className:"overview-title"},l.createElement("h2",null,l.createElement("span",{dangerouslySetInnerHTML:{__html:a}})," ",l.createElement("a",{href:d,title:d,"data-vscode-context":JSON.stringify(fe)},"#",u)),y?l.createElement("button",{title:"Rename",onClick:i(()=>p(!0),"onClick"),className:"icon-button"},Ge):null,l.createElement("button",{title:"Copy Link",onClick:F,className:"icon-button","aria-label":"Copy Pull Request Link"},He));return c?G:Q}i(jo,"Title");function Uo({isCurrentlyCheckedOut:r,isIssue:a,repositoryDefaultBranch:u,owner:d,repo:c,number:p,busy:v}){const{refresh:y}=(0,l.useContext)(Ae);return l.createElement("div",{className:"button-group"},l.createElement(Bi,{isCurrentlyCheckedOut:r,isIssue:a,repositoryDefaultBranch:u,owner:d,repo:c,number:p}),l.createElement("button",{title:"Refresh with the latest data from GitHub",onClick:y,className:"secondary"},"Refresh"),v?l.createElement("div",{className:"spinner"},P):null)}i(Uo,"ButtonGroup");function ns({canEdit:r,codingAgentEvent:a}){const{cancelCodingAgent:u,updatePR:d,openSessionLog:c}=(0,l.useContext)(Ae),[p,v]=(0,l.useState)(!1),y=i(async()=>{if(!a)return;v(!0);const F=await u(a);F.events.length>0&&d(F),v(!1)},"cancel"),x=a==null?void 0:a.sessionLink;if(!a||dr(a)!==vn.Started)return null;const T={preventDefaultContextMenuItems:!0,...x};T["github:codingAgentMenu"]=!0;const q=[];return x&&q.push({label:"View Session",value:"",action:i(()=>c(x),"action")}),r&&q.unshift({label:"Cancel Coding Agent",value:"",action:y}),l.createElement(Ir,{optionsContext:i(()=>JSON.stringify(T),"optionsContext"),defaultAction:q[0].action,defaultOptionLabel:i(()=>p?l.createElement(l.Fragment,null,l.createElement("span",{className:"loading-button"},P),q[0].label):q[0].label,"defaultOptionLabel"),defaultOptionValue:i(()=>q[0].value,"defaultOptionValue"),allOptions:i(()=>q,"allOptions"),optionsTitle:q[0].label,disabled:p,hasSingleAction:!1,spreadable:!1,isSecondary:!0})}i(ns,"CancelCodingAgentButton");function Rn({state:r,stateReason:a,isDraft:u,isIssue:d,author:c,base:p,head:v,codingAgentEvent:y}){const{text:x,color:T,icon:q}=Wo(r,!!u,d,a),F=dr(y);let G;return F===vn.Started?G=Ar:F===vn.Completed?G=hi:F===vn.Failed&&(G=pi),l.createElement("div",{className:"subtitle"},l.createElement("div",{id:"status",className:`status-badge-${T}`},l.createElement("span",{className:"icon"},q),l.createElement("span",null,x)),l.createElement("div",{className:"author"},l.createElement(St,{for:c,substituteIcon:G}),l.createElement("div",{className:"merge-branches"},l.createElement(Ct,{for:c})," ",d?null:l.createElement(l.Fragment,null,tn(r)," into"," ",l.createElement("code",{className:"branch-tag"},p)," from ",l.createElement("code",{className:"branch-tag"},v)))))}i(Rn,"Subtitle");const Bi=i(({isCurrentlyCheckedOut:r,isIssue:a,repositoryDefaultBranch:u,owner:d,repo:c,number:p})=>{const{exitReviewMode:v,checkout:y,openChanges:x}=(0,l.useContext)(Ae),[T,q]=(0,l.useState)(!1),F=i(async Q=>{try{switch(q(!0),Q){case"checkout":await y();break;case"exitReviewMode":await v();break;case"openChanges":await x();break;default:throw new Error(`Can't find action ${Q}`)}}finally{q(!1)}},"onClick");if(a)return null;const G={preventDefaultContextMenuItems:!0,owner:d,repo:c,number:p};G["github:checkoutMenu"]=!0;const fe=[];return r?fe.push({label:`Checkout '${u}'`,value:"",action:i(()=>F("exitReviewMode"),"action")}):fe.push({label:"Checkout",value:"",action:i(()=>F("checkout"),"action")}),fe.push({label:"Open Changes",value:"",action:i(()=>F("openChanges"),"action")}),l.createElement(Ir,{optionsContext:i(()=>JSON.stringify(G),"optionsContext"),defaultAction:fe[0].action,defaultOptionLabel:i(()=>fe[0].label,"defaultOptionLabel"),defaultOptionValue:i(()=>fe[0].value,"defaultOptionValue"),allOptions:i(()=>fe,"allOptions"),optionsTitle:fe[0].label,disabled:T,hasSingleAction:!1,spreadable:!1})},"CheckoutButton");function Wo(r,a,u,d){const c=u?_e:z,p=u?w:xe;if(r===xt.Merged)return{text:"Merged",color:"merged",icon:Be};if(r===xt.Open)return a?{text:"Draft",color:"draft",icon:ne}:{text:"Open",color:"open",icon:p};{let v="closed";return u&&(v=d!=="COMPLETED"?"draft":"merged"),{text:"Closed",color:v,icon:c}}}i(Wo,"getStatus");function tn(r){return r===xt.Merged?"merged changes":"wants to merge changes"}i(tn,"getActionText");const Gr=i(({busy:r,baseHasMergeQueue:a})=>r?l.createElement("label",{htmlFor:"automerge-checkbox",className:"automerge-checkbox-label"},"Setting..."):l.createElement("label",{htmlFor:"automerge-checkbox",className:"automerge-checkbox-label"},a?"Merge when ready":"Auto-merge"),"AutoMergeLabel"),fr=i(({updateState:r,baseHasMergeQueue:a,allowAutoMerge:u,defaultMergeMethod:d,mergeMethodsAvailability:c,autoMerge:p,isDraft:v})=>{if(!u&&!p||!c||!d)return null;const y=l.useRef(),[x,T]=l.useState(!1),q=i(()=>{var F,G;return(G=(F=y.current)==null?void 0:F.value)!=null?G:"merge"},"selectedMethod");return l.createElement("div",{className:"automerge-section"},l.createElement("div",{className:"automerge-checkbox-wrapper"},l.createElement("input",{id:"automerge-checkbox",type:"checkbox",name:"automerge",checked:p,disabled:!u||v||x,onChange:i(async()=>{T(!0),await r({autoMerge:!p,autoMergeMethod:q()}),T(!1)},"onChange")})),l.createElement(Gr,{busy:x,baseHasMergeQueue:a}),a?null:l.createElement("div",{className:"merge-select-container"},l.createElement(Ko,{ref:y,defaultMergeMethod:d,mergeMethodsAvailability:c,onChange:i(async()=>{T(!0),await r({autoMergeMethod:q()}),T(!1)},"onChange"),disabled:x})))},"AutoMerge"),mr=i(({mergeQueueEntry:r})=>{const a=l.useContext(Ae);let u,d;switch(r.state){case pn.Mergeable:case pn.AwaitingChecks:case pn.Queued:{d=l.createElement("span",{className:"merge-queue-pending"},"Queued to merge..."),r.position===1?u=l.createElement("span",null,"This pull request is at the head of the ",l.createElement("a",{href:r.url},"merge queue"),"."):u=l.createElement("span",null,"This pull request is in the ",l.createElement("a",{href:r.url},"merge queue"),".");break}case pn.Locked:{d=l.createElement("span",{className:"merge-queue-blocked"},"Merging is blocked"),u=l.createElement("span",null,"The base branch does not allow updates");break}case pn.Unmergeable:{d=l.createElement("span",{className:"merge-queue-blocked"},"Merging is blocked"),u=l.createElement("span",null,"There are conflicts with the base branch.");break}}return l.createElement("div",{className:"merge-queue-container"},l.createElement("div",{className:"merge-queue"},l.createElement("div",{className:"merge-queue-icon"}),l.createElement("div",{className:"merge-queue-title"},d),u),l.createElement("div",{className:"button-container"},l.createElement("button",{onClick:a.dequeue},"Remove from Queue")))},"QueuedToMerge");var nn,Cn=new Uint8Array(16);function Zo(){if(!nn&&(nn=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!nn))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return nn(Cn)}i(Zo,"rng");const Gt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function zi(r){return typeof r=="string"&&Gt.test(r)}i(zi,"validate");const ji=zi;for(var st=[],pr=0;pr<256;++pr)st.push((pr+256).toString(16).substr(1));function rs(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,u=(st[r[a+0]]+st[r[a+1]]+st[r[a+2]]+st[r[a+3]]+"-"+st[r[a+4]]+st[r[a+5]]+"-"+st[r[a+6]]+st[r[a+7]]+"-"+st[r[a+8]]+st[r[a+9]]+"-"+st[r[a+10]]+st[r[a+11]]+st[r[a+12]]+st[r[a+13]]+st[r[a+14]]+st[r[a+15]]).toLowerCase();if(!ji(u))throw TypeError("Stringified UUID is invalid");return u}i(rs,"stringify");const Pn=rs;function rn(r,a,u){r=r||{};var d=r.random||(r.rng||Zo)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,a){u=u||0;for(var c=0;c<16;++c)a[u+c]=d[c];return a}return Pn(d)}i(rn,"v4");const qo=rn;var Xr=(r=>(r[r.esc=27]="esc",r[r.down=40]="down",r[r.up=38]="up",r))(Xr||{});const Ui=i(({options:r,defaultOption:a,disabled:u,submitAction:d,changeAction:c})=>{const[p,v]=(0,l.useState)(a),[y,x]=(0,l.useState)(!1),T=qo(),q=`expandOptions${T}`,F=i(()=>{x(!y)},"onClick"),G=i(de=>{v(de.target.value),x(!1);const le=document.getElementById(`confirm-button${T}`);le==null||le.focus(),c&&c(de.target.value)},"onMethodChange"),fe=i(de=>{if(y){const le=document.activeElement;switch(de.keyCode){case 27:x(!1);const Se=document.getElementById(q);Se==null||Se.focus();break;case 40:if(!(le!=null&&le.id)||le.id===q){const be=document.getElementById(`${T}option0`);be==null||be.focus()}else{const be=new RegExp(`${T}option([0-9])`),Te=le.id.match(be);if(Te!=null&&Te.length){const Le=parseInt(Te[1]);if(Le<Object.entries(r).length-1){const et=document.getElementById(`${T}option${Le+1}`);et==null||et.focus()}}}break;case 38:if(!(le!=null&&le.id)||le.id===q){const be=Object.entries(r).length-1,Te=document.getElementById(`${T}option${be}`);Te==null||Te.focus()}else{const be=new RegExp(`${T}option([0-9])`),Te=le.id.match(be);if(Te!=null&&Te.length){const Le=parseInt(Te[1]);if(Le>0){const et=document.getElementById(`${T}option${Le-1}`);et==null||et.focus()}}}break}}},"onKeyDown"),Q=Object.entries(r).length===1?"hidden":y?"open":"";return l.createElement("div",{className:"select-container",onKeyDown:fe},l.createElement("div",{className:"select-control"},l.createElement(Jr,{dropdownId:T,className:Object.keys(r).length>1?"select-left":"",options:r,selected:p,submitAction:d,disabled:!!u}),l.createElement("div",{className:`split${u?" disabled":""}`},l.createElement("div",{className:`separator${u?" disabled":""}`})),l.createElement("button",{id:q,className:"select-right "+Q,"aria-label":"Expand button options",onClick:F},ue)),l.createElement("div",{className:y?"options-select":"hidden"},Object.entries(r).map(([de,le],Se)=>l.createElement("button",{id:`${T}option${Se}`,key:de,value:de,onClick:G},le))))},"Dropdown");function Jr({dropdownId:r,className:a,options:u,selected:d,disabled:c,submitAction:p}){const[v,y]=(0,l.useState)(!1),x=i(async T=>{T.preventDefault();try{y(!0),await p(d)}finally{y(!1)}},"onSubmit");return l.createElement("form",{onSubmit:x},l.createElement("input",{disabled:v||c,type:"submit",className:a,id:`confirm-button${r}`,value:u[d]}))}i(Jr,"Confirm");function hr(r){const{reviewer:a,state:u}=r.reviewState,{reRequestReview:d}=(0,l.useContext)(Ae),c=r.event?Pi(r.event):void 0;return l.createElement("div",{className:"section-item reviewer"},l.createElement("div",{className:"avatar-with-author"},l.createElement(St,{for:a}),l.createElement(Ct,{for:a})),l.createElement("div",{className:"reviewer-icons"},u!=="REQUESTED"&&(zt(a)||a.accountType!==Wr.Bot)?l.createElement("button",{className:"icon-button",title:"Re-request review",onClick:i(()=>d(r.reviewState.reviewer.id),"onClick")},yo,"\uFE0F"):null,Lt[u],c?l.createElement("div",{role:"alert","aria-label":c}):null))}i(hr,"Reviewer");const Lt={REQUESTED:(0,l.cloneElement)(he,{className:"section-icon requested",title:"Awaiting requested review"}),COMMENTED:(0,l.cloneElement)(Ce,{className:"section-icon commented",Root:"div",title:"Left review comments"}),APPROVED:(0,l.cloneElement)(oe,{className:"section-icon approved",title:"Approved these changes"}),CHANGES_REQUESTED:(0,l.cloneElement)(gt,{className:"section-icon changes",title:"Requested changes"})},os=i(({pr:r,isSimple:a})=>r.state===xt.Merged?l.createElement("div",{className:"branch-status-message"},l.createElement("div",{className:"branch-status-icon"},a?Be:null)," ","Pull request successfully merged."):r.state===xt.Closed?l.createElement("div",{className:"branch-status-message"},"This pull request is closed."):null,"PRStatusMessage"),is=i(({pr:r})=>r.state===xt.Open?null:l.createElement(On,{...r}),"DeleteOption"),Wi=i(({pr:r})=>{var a;const{state:u,status:d}=r,[c,p]=(0,l.useReducer)(v=>!v,(a=d==null?void 0:d.statuses.some(v=>v.state===tt.Failure))!=null?a:!1);return(0,l.useEffect)(()=>{var v;(v=d==null?void 0:d.statuses.some(y=>y.state===tt.Failure))!=null&&v?c||p():c&&p()},d==null?void 0:d.statuses),u===xt.Open&&(d!=null&&d.statuses.length)?l.createElement(l.Fragment,null,l.createElement("div",{className:"status-section"},l.createElement("div",{className:"status-item"},l.createElement(Dn,{state:d.state}),l.createElement("p",{className:"status-item-detail-text"},Gi(d.statuses)),l.createElement("button",{id:"status-checks-display-button",className:"secondary small-button",onClick:p,"aria-expanded":c},c?"Hide":"Show")),c?l.createElement(Yi,{statuses:d.statuses}):null)):null},"StatusChecks"),ls=i(({pr:r})=>{const{state:a,reviewRequirement:u}=r;return!u||a!==xt.Open?null:l.createElement(l.Fragment,null,l.createElement("div",{className:"status-section"},l.createElement("div",{className:"status-item"},l.createElement(gr,{state:u.state}),l.createElement("p",{className:"status-item-detail-text"},ps(u)))))},"RequiredReviewers"),ss=i(({pr:r,isSimple:a})=>{if(!a||r.state!==xt.Open||r.reviewers.length===0)return null;const u=[],d=new Set(r.reviewers);let c=r.events.length-1;for(;c>=0&&d.size>0;){const p=r.events[c];if(p.event===je.Reviewed){for(const v of d)if(p.user.id===v.reviewer.id){u.push({event:p,reviewState:v}),d.delete(v);break}}c--}return l.createElement("div",{className:"section"}," ",u.map(p=>l.createElement(hr,{key:Yt(p.reviewState.reviewer),...p})))},"InlineReviewers"),as=i(({pr:r,isSimple:a})=>r.isIssue?null:l.createElement("div",{id:"status-checks"},l.createElement(l.Fragment,null,l.createElement(os,{pr:r,isSimple:a}),l.createElement(ls,{pr:r}),l.createElement(Wi,{pr:r}),l.createElement(ss,{pr:r,isSimple:a}),l.createElement(Qo,{pr:r,isSimple:a}),l.createElement(is,{pr:r}))),"StatusChecksSection"),Qo=i(({pr:r,isSimple:a})=>{const{create:u,checkMergeability:d}=(0,l.useContext)(Ae);if(a&&r.state!==xt.Open)return l.createElement("div",{className:"branch-status-container"},l.createElement("form",null,l.createElement("button",{type:"submit",onClick:u},"Create New Pull Request...")));if(r.state!==xt.Open)return null;const{mergeable:c}=r,[p,v]=(0,l.useState)(c);return c!==p&&c!==vt.Unknown&&v(c),(0,l.useEffect)(()=>{const y=setInterval(async()=>{if(p===vt.Unknown){const x=await d();v(x)}},3e3);return()=>clearInterval(y)},[p]),l.createElement("div",null,l.createElement(us,{mergeable:p,isSimple:a,canUpdateBranch:r.canUpdateBranch}),l.createElement(Zi,{mergeable:p,isSimple:a,isCurrentlyCheckedOut:r.isCurrentlyCheckedOut,canUpdateBranch:r.canUpdateBranch}),l.createElement(Qi,{pr:{...r,mergeable:p},isSimple:a}))},"MergeStatusAndActions"),eo=null,us=i(({mergeable:r,isSimple:a,canUpdateBranch:u})=>{const{updateBranch:d}=(0,l.useContext)(Ae),[c,p]=(0,l.useState)(!1),v=i(()=>{p(!0),d().finally(()=>p(!1))},"onClick");let y=he,x="Checking if this branch can be merged...",T=null;return r===vt.Mergeable?(y=oe,x="This branch has no conflicts with the base branch."):r===vt.Conflict?(y=ce,x="This branch has conflicts that must be resolved.",T="Resolve conflicts"):r===vt.NotMergeable?(y=ce,x="Branch protection policy must be fulfilled before merging."):r===vt.Behind&&(y=ce,x="This branch is out-of-date with the base branch.",T="Update with merge commit"),a&&(y=null,r!==vt.Conflict&&(T=null)),l.createElement("div",{className:"status-section"},l.createElement("div",{className:"status-item"},y,l.createElement("p",null,x),T&&u?l.createElement("div",{className:"button-container"},l.createElement("button",{className:"secondary",onClick:v,disabled:c},T)):null))},"MergeStatus"),Zi=i(({mergeable:r,isSimple:a,isCurrentlyCheckedOut:u,canUpdateBranch:d})=>{const{updateBranch:c}=(0,l.useContext)(Ae),[p,v]=(0,l.useState)(!1),y=i(()=>{v(!0),c().finally(()=>v(!1))},"update"),x=!u&&r===vt.Conflict;return!d||x||a||r===vt.Behind||r===vt.Conflict||r===vt.Unknown?null:l.createElement("div",{className:"status-item status-section"},Kn,l.createElement("p",null,"This branch is out-of-date with the base branch."),l.createElement("button",{className:"secondary",onClick:y,disabled:p},"Update with Merge Commit"))},"OfferToUpdate"),qi=i(({isSimple:r,isCopilotOnMyBehalf:a,mergeMethod:u})=>{var d;const{readyForReview:c,readyForReviewAndMerge:p,updatePR:v,pr:y}=(0,l.useContext)(Ae),[x,T]=(0,l.useState)((d=y==null?void 0:y.busy)!=null?d:!1),q=(0,l.useCallback)(async()=>{try{T(!0);const fe=await c();v(fe)}finally{T(!1)}},[c,v]),F=(0,l.useCallback)(async()=>{try{T(!0);const fe=await p({mergeMethod:u});v(fe)}finally{T(!1)}},[p,v,u]),G=(0,l.useCallback)(()=>{const fe=[{label:"Ready for Review",value:"ready",action:q}];return a&&fe.push({label:"Ready, Approve, and Auto-Merge",value:"readyAndMerge",action:F}),fe},[a,q,F]);return l.createElement("div",{className:"ready-for-review-container"},l.createElement("div",{className:"ready-for-review-text-wrapper"},l.createElement("div",{className:"ready-for-review-icon"},r?null:Kn),l.createElement("div",null,l.createElement("div",{className:"ready-for-review-heading"},"This pull request is still a work in progress."),l.createElement("div",{className:"ready-for-review-meta"},"Draft pull requests cannot be merged."))),l.createElement("div",{className:"button-container"},l.createElement(Ir,{optionsContext:i(()=>JSON.stringify({preventDefaultContextMenuItems:!0,"github:readyForReviewMenu":!0,"github:readyForReviewMenuWithMerge":a,mergeMethod:u}),"optionsContext"),defaultAction:q,defaultOptionLabel:i(()=>"Ready for Review","defaultOptionLabel"),defaultOptionValue:i(()=>"ready","defaultOptionValue"),allOptions:G,optionsTitle:"Ready for Review",disabled:x||(y==null?void 0:y.busy),hasSingleAction:!a,spreadable:!1})))},"ReadyForReview"),Xt=i(r=>{const a=(0,l.useContext)(Ae),u=(0,l.useRef)(),[d,c]=(0,l.useState)(null);return r.mergeQueueMethod?l.createElement("div",null,l.createElement("div",{id:"merge-comment-form"},l.createElement("button",{onClick:i(()=>a.enqueue(),"onClick")},"Add to Merge Queue"))):d?l.createElement(ds,{pr:r,method:d,cancel:i(()=>c(null),"cancel")}):l.createElement("div",{className:"automerge-section wrapper"},l.createElement("button",{onClick:i(()=>c(u.current.value),"onClick")},"Merge Pull Request"),lt,"using method",lt,l.createElement(Ko,{ref:u,...r}))},"Merge"),Qi=i(({pr:r,isSimple:a})=>{var u;const{hasWritePermission:d,canEdit:c,isDraft:p,mergeable:v,isCopilotOnMyBehalf:y,defaultMergeMethod:x}=r;if(p)return c?l.createElement(qi,{isSimple:a,isCopilotOnMyBehalf:y,mergeMethod:x}):null;if(v===vt.Mergeable&&d&&!r.mergeQueueEntry)return a?l.createElement(Ki,{...r}):l.createElement(Xt,{...r});if(!a&&d&&!r.mergeQueueEntry){const T=(0,l.useContext)(Ae);return l.createElement(fr,{updateState:i(q=>T.updateAutoMerge(q),"updateState"),...r,baseHasMergeQueue:!!r.mergeQueueMethod,defaultMergeMethod:(u=r.autoMergeMethod)!=null?u:r.defaultMergeMethod})}else if(r.mergeQueueEntry)return l.createElement(mr,{mergeQueueEntry:r.mergeQueueEntry});return null},"PrActions"),cs=i(()=>{const{openOnGitHub:r}=useContext(PullRequestContext);return React.createElement("button",{id:"merge-on-github",type:"submit",onClick:i(()=>r(),"onClick")},"Merge on github.com")},"MergeOnGitHub"),Ki=i(r=>{const{merge:a,updatePR:u}=(0,l.useContext)(Ae);async function d(p){const v=await a({title:"",description:"",method:p});u(v)}i(d,"submitAction");const c=Object.keys(to).filter(p=>r.mergeMethodsAvailability[p]).reduce((p,v)=>(p[v]=to[v],p),{});return l.createElement(Ui,{options:c,defaultOption:r.defaultMergeMethod,submitAction:d})},"MergeSimple"),On=i(r=>{const{deleteBranch:a}=(0,l.useContext)(Ae),[u,d]=(0,l.useState)(!1);return r.isRemoteHeadDeleted!==!1&&r.isLocalHeadDeleted!==!1?l.createElement("div",null):l.createElement("div",{className:"branch-status-container"},l.createElement("form",{onSubmit:i(async c=>{c.preventDefault();try{d(!0);const p=await a();p&&p.cancelled&&d(!1)}finally{d(!1)}},"onSubmit")},l.createElement("button",{disabled:u,className:"secondary",type:"submit"},"Delete Branch...")))},"DeleteBranch");function ds({pr:r,method:a,cancel:u}){const{merge:d,updatePR:c,changeEmail:p}=(0,l.useContext)(Ae),[v,y]=(0,l.useState)(!1),x=r.emailForCommit;return l.createElement("div",null,l.createElement("form",{id:"merge-comment-form",onSubmit:i(async T=>{T.preventDefault();try{y(!0);const{title:q,description:F}=T.target,G=await d({title:q==null?void 0:q.value,description:F==null?void 0:F.value,method:a,email:x});c(G)}finally{y(!1)}},"onSubmit")},a==="rebase"?null:l.createElement("input",{type:"text",name:"title",defaultValue:fs(a,r)}),a==="rebase"?null:l.createElement("textarea",{name:"description",defaultValue:ms(a,r)}),a==="rebase"||!x?null:l.createElement("div",{className:"commit-association"},l.createElement("span",null,"Commit will be associated with ",l.createElement("button",{className:"input-box",title:"Change email","aria-label":"Change email",disabled:v,onClick:i(()=>{y(!0),p(x).finally(()=>y(!1))},"onClick")},x))),l.createElement("div",{className:"form-actions",id:a==="rebase"?"rebase-actions":""},l.createElement("button",{className:"secondary",onClick:u},"Cancel"),l.createElement("button",{disabled:v,type:"submit",id:"confirm-merge"},a==="rebase"?"Confirm ":"",to[a]))))}i(ds,"ConfirmMerge");function fs(r,a){var u,d,c,p;switch(r){case"merge":return(d=(u=a.mergeCommitMeta)==null?void 0:u.title)!=null?d:`Merge pull request #${a.number} from ${a.head}`;case"squash":return(p=(c=a.squashCommitMeta)==null?void 0:c.title)!=null?p:`${a.title} (#${a.number})`;default:return""}}i(fs,"getDefaultTitleText");function ms(r,a){var u,d,c,p;switch(r){case"merge":return(d=(u=a.mergeCommitMeta)==null?void 0:u.description)!=null?d:a.title;case"squash":return(p=(c=a.squashCommitMeta)==null?void 0:c.description)!=null?p:"";default:return""}}i(ms,"getDefaultDescriptionText");const to={merge:"Create Merge Commit",squash:"Squash and Merge",rebase:"Rebase and Merge"},Ko=l.forwardRef(({defaultMergeMethod:r,mergeMethodsAvailability:a,onChange:u,ariaLabel:d,name:c,title:p,disabled:v},y)=>l.createElement("select",{ref:y,defaultValue:r,onChange:u,disabled:v,"aria-label":d!=null?d:"Select merge method",name:c,title:p},Object.entries(to).map(([x,T])=>l.createElement("option",{key:x,value:x,disabled:!a[x]},T,a[x]?null:" (not enabled)")))),Yi=i(({statuses:r})=>l.createElement("div",{className:"status-scroll"},r.map(a=>l.createElement("div",{key:a.id,className:"status-check"},l.createElement("div",{className:"status-check-details"},l.createElement(Dn,{state:a.state}),l.createElement(St,{for:{avatarUrl:a.avatarUrl,url:a.url}}),l.createElement("span",{className:"status-check-detail-text"},a.workflowName?`${a.workflowName} / `:null,a.context,a.event?` (${a.event})`:null," ",a.description?`\u2014 ${a.description}`:null)),l.createElement("div",null,a.isRequired?l.createElement("span",{className:"label"},"Required"):null,a.targetUrl?l.createElement("a",{href:a.targetUrl,title:a.targetUrl},"Details"):null)))),"StatusCheckDetails");function Gi(r){const a=bo(r,d=>{switch(d.state){case tt.Success:case tt.Failure:case tt.Neutral:return d.state;default:return tt.Pending}}),u=[];for(const d of Object.keys(a)){const c=a[d].length;let p="";switch(d){case tt.Success:p="successful";break;case tt.Failure:p="failed";break;case tt.Neutral:p="skipped";break;default:p="pending"}const v=c>1?`${c} ${p} checks`:`${c} ${p} check`;u.push(v)}return u.join(" and ")}i(Gi,"getSummaryLabel");function Dn({state:r}){switch(r){case tt.Neutral:return dn;case tt.Success:return oe;case tt.Failure:return ce}return he}i(Dn,"StateIcon");function gr({state:r}){switch(r){case tt.Pending:return gt;case tt.Failure:return ce}return oe}i(gr,"RequiredReviewStateIcon");function ps(r){const a=r.approvals.length,u=r.requestedChanges.length,d=r.count;switch(r.state){case tt.Failure:return`At least ${d} approving review${d>1?"s":""} is required by reviewers with write access.`;case tt.Pending:return`${u} review${u>1?"s":""} requesting changes by reviewers with write access.`}return`${a} approving review${a>1?"s":""} by reviewers with write access.`}i(ps,"getRequiredReviewSummary");function no(r){const{displayName:a,canDelete:u,color:d}=r,c=Vt(d,r.isDarkTheme,!1);return l.createElement("div",{className:"section-item label",style:{backgroundColor:c.backgroundColor,color:c.textColor,borderColor:`${c.borderColor}`,paddingRight:u?"2px":"8px"}},a,r.children)}i(no,"Label");function ka(r){const{displayName:a,color:u}=r,d=gitHubLabelColor(u,r.isDarkTheme,!1);return React.createElement("li",{style:{backgroundColor:d.backgroundColor,color:d.textColor,borderColor:`${d.borderColor}`}},a,r.children)}i(ka,"LabelCreate");function yn({id:r,title:a,hasWritePermission:u,onHeaderClick:d,children:c,iconButtonGroup:p}){return l.createElement("div",{id:r,className:"section"},l.createElement("div",{className:`section-header ${u?"clickable":""}`,onClick:u?d:void 0},l.createElement("div",{className:"section-title"},a),u?p||l.createElement("button",{className:"icon-button",title:`Add ${a}`,onClick:d},ke):null),c)}i(yn,"Section");function Yo({reviewers:r,labels:a,hasWritePermission:u,isIssue:d,projectItems:c,milestone:p,assignees:v,canAssignCopilot:y}){const{addReviewers:x,addAssignees:T,addAssigneeYourself:q,addAssigneeCopilot:F,addLabels:G,removeLabel:fe,changeProjects:Q,addMilestone:de,updatePR:le,pr:Se}=(0,l.useContext)(Ae),[be,Te]=(0,l.useState)(!1),Le=y&&v.every(we=>!Bo.includes(we.login)),et=i(async()=>{const we=await Q();le({...we})},"updateProjects");return l.createElement("div",{id:"sidebar"},!d&&l.createElement(yn,{id:"reviewers",title:"Reviewers",hasWritePermission:u,onHeaderClick:i(async()=>{const we=await x();le({reviewers:we.reviewers})},"onHeaderClick")},r&&r.length?r.map(we=>l.createElement(hr,{key:Yt(we.reviewer),reviewState:we})):l.createElement("div",{className:"section-placeholder"},"None yet")),l.createElement(yn,{id:"assignees",title:"Assignees",hasWritePermission:u,onHeaderClick:i(async we=>{const Ue=we==null?void 0:we.target;if(Ue!=null&&Ue.closest&&Ue.closest("#assign-copilot-btn"))return;const Ke=await T();le({assignees:Ke.assignees,events:Ke.events})},"onHeaderClick"),iconButtonGroup:u&&l.createElement("div",{className:"icon-button-group"},Le?l.createElement("button",{id:"assign-copilot-btn",className:"icon-button",title:"Assign for Copilot to work on",disabled:be,onClick:i(async we=>{we.stopPropagation(),Te(!0);try{const Ue=await F();le({assignees:Ue.assignees,events:Ue.events})}finally{Te(!1)}},"onClick")},De):null,l.createElement("button",{className:"icon-button",title:"Add Assignees"},ke))},v&&v.length?v.map((we,Ue)=>l.createElement("div",{key:Ue,className:"section-item reviewer"},l.createElement("div",{className:"avatar-with-author"},l.createElement(St,{for:we}),l.createElement(Ct,{for:we})))):l.createElement("div",{className:"section-placeholder"},"None yet",Se.hasWritePermission?l.createElement(l.Fragment,null,"\u2014",l.createElement("a",{className:"assign-yourself",onClick:i(async()=>{const we=await q();le({assignees:we.assignees,events:we.events})},"onClick")},"assign yourself")):null)),l.createElement(yn,{id:"labels",title:"Labels",hasWritePermission:u,onHeaderClick:i(async()=>{const we=await G();le({labels:we.added})},"onHeaderClick")},a.length?l.createElement("div",{className:"labels-list"},a.map(we=>l.createElement(no,{key:we.name,...we,canDelete:u,isDarkTheme:Se.isDarkTheme},u?l.createElement("button",{className:"icon-button",onClick:i(()=>fe(we.name),"onClick")},ce,"\uFE0F"):null))):l.createElement("div",{className:"section-placeholder"},"None yet")),!Se.isEnterprise&&l.createElement(yn,{id:"project",title:"Project",hasWritePermission:u,onHeaderClick:et},c?c.length>0?c.map(we=>l.createElement(vs,{key:we.project.title,...we,canDelete:u})):l.createElement("div",{className:"section-placeholder"},"None yet"):l.createElement("a",{onClick:et},"Sign in with more permissions to see projects")),l.createElement(yn,{id:"milestone",title:"Milestone",hasWritePermission:u,onHeaderClick:i(async()=>{const we=await de();le({milestone:we.added})},"onHeaderClick")},p?l.createElement(gs,{key:p.title,...p,canDelete:u}):l.createElement("div",{className:"section-placeholder"},"No milestone")))}i(Yo,"Sidebar");function Xi(r){const[a,u]=(0,l.useState)(!1),d=(0,l.useRef)(null);return l.createElement("div",{className:"collapsible-sidebar"},l.createElement("div",{className:`collapsible-sidebar-header ${a?"expanded":""}`,onClick:i(()=>u(c=>!c),"onClick"),tabIndex:0,role:"button","aria-expanded":a},l.createElement("span",{className:"collapsible-sidebar-title"},a?null:l.createElement(hs,{...r}))),l.createElement("div",{className:"collapsible-sidebar-content",ref:d,style:{display:a?"block":"none"}},l.createElement(Yo,{...r})),l.createElement("a",{className:"collapsible-label-see-more",onClick:i(()=>u(c=>!c),"onClick")},a?"See less":"See more"))}i(Xi,"CollapsibleSidebar");function hs(r){const{reviewers:a,assignees:u,labels:d,projectItems:c,milestone:p,isIssue:v}=r,[y,x]=(0,l.useState)(!1);(0,l.useEffect)(()=>{const Q=i(()=>{x(window.innerWidth<=350)},"checkViewportWidth");return Q(),window.addEventListener("resize",Q),()=>window.removeEventListener("resize",Q)},[]);const T=i(({users:Q})=>l.createElement("span",{className:"avatar-stack",style:{width:`${Math.min(Q.length,10)*10+10}px`}},Q.slice(0,10).map((de,le)=>l.createElement("span",{className:"stacked-avatar",style:{left:`${le*10}px`}},l.createElement(St,{for:de})))),"AvatarStack"),q=i(({items:Q,getKey:de,getColor:le,getText:Se})=>{const be=(0,l.useRef)(null),[Te,Le]=(0,l.useState)(Q.length);(0,l.useEffect)(()=>{if(!be.current||Q.length===0)return;const Ue=new ResizeObserver(()=>{const Ke=be.current;if(!Ke)return;const Tt=Ke.offsetWidth,ct=60;let dt=Q.length,Nt=Q.reduce((ze,Dt)=>ze+Se(Dt).length,0);for(;dt>0&&!(Nt*6+14*dt+(dt<Q.length?ct:0)<=Tt);)Nt-=Se(Q[dt-1]).length,dt--;Le(Math.max(1,dt))});return Ue.observe(be.current),()=>Ue.disconnect()},[Q.length]);const et=Q.slice(0,Te),we=Q.length-Te;return l.createElement("span",{className:"pill-container",ref:be},et.map(Ue=>{const Ke=le(Ue);return l.createElement("span",{key:de(Ue),className:"pill-item label",style:{backgroundColor:Ke.backgroundColor,color:Ke.textColor,borderRadius:"20px"},title:Se(Ue)},Se(Ue))}),we>0&&l.createElement("span",{className:"pill-overflow"},"+",we," more"))},"PillContainer"),F=[],G=a==null?void 0:a.filter(Q=>!!Q.reviewer.avatarUrl).map(Q=>({avatarUrl:Q.reviewer.avatarUrl,name:Bt(Q.reviewer)}));!v&&G&&G.length&&F.push({label:"Reviewers",value:l.createElement(T,{users:G}),count:G.length});const fe=u==null?void 0:u.filter(Q=>!!Q.avatarUrl).map(Q=>({avatarUrl:Q.avatarUrl,name:Bt(Q)}));return fe&&fe.length&&F.push({label:"Assignees",value:l.createElement(T,{users:fe}),count:fe.length}),d&&d.length&&F.push({label:"Labels",value:l.createElement(q,{items:d,getKey:i(Q=>Q.name,"getKey"),getColor:i(Q=>Vt(Q.color,r==null?void 0:r.isDarkTheme,!1),"getColor"),getText:i(Q=>Q.displayName,"getText")}),count:d.length}),c&&c.length&&F.push({label:"Project",value:l.createElement(q,{items:c,getKey:i(Q=>Q.project.title,"getKey"),getColor:i(()=>Vt("#ededed",r==null?void 0:r.isDarkTheme,!1),"getColor"),getText:i(Q=>Q.project.title,"getText")}),count:c.length}),p&&F.push({label:"Milestone",value:l.createElement(q,{items:[p],getKey:i(Q=>Q.title,"getKey"),getColor:i(()=>Vt("#ededed",r==null?void 0:r.isDarkTheme,!1),"getColor"),getText:i(Q=>Q.title,"getText")}),count:1}),F.length?l.createElement("span",{className:"collapsed-label"},F.map(Q=>l.createElement("span",{className:"collapsed-section",key:Q.label},l.createElement("span",{className:"collapsed-section-label"},Q.label),y?l.createElement("span",{className:"collapsed-section-count"},Q.count):Q.value))):l.createElement("span",{className:"collapsed-label"},v?"Assignees, Labels, Project, and Milestone":"Reviewers, Assignees, Labels, Project, and Milestone")}i(hs,"CollapsedLabel");function gs(r){const{removeMilestone:a,updatePR:u,pr:d}=(0,l.useContext)(Ae),c=getComputedStyle(document.documentElement).getPropertyValue("--vscode-badge-foreground"),p=Vt(c,d.isDarkTheme,!1),{canDelete:v,title:y}=r;return l.createElement("div",{className:"labels-list"},l.createElement("div",{className:"section-item label",style:{backgroundColor:p.backgroundColor,color:p.textColor,borderColor:`${p.borderColor}`}},y,v?l.createElement("button",{className:"icon-button",onClick:i(async()=>{await a(),u({milestone:void 0})},"onClick")},ce,"\uFE0F"):null))}i(gs,"Milestone");function vs(r){const{removeProject:a,updatePR:u,pr:d}=(0,l.useContext)(Ae),c=getComputedStyle(document.documentElement).getPropertyValue("--vscode-badge-foreground"),p=Vt(c,d.isDarkTheme,!1),{canDelete:v}=r;return l.createElement("div",{className:"labels-list"},l.createElement("div",{className:"section-item label",style:{backgroundColor:p.backgroundColor,color:p.textColor,borderColor:`${p.borderColor}`}},r.project.title,v?l.createElement("button",{className:"icon-button",onClick:i(async()=>{var y;await a(r),u({projectItems:(y=d.projectItems)==null?void 0:y.filter(x=>x.id!==r.id)})},"onClick")},ce,"\uFE0F"):null))}i(vs,"Project");var Cs=(r=>(r[r.ADD=0]="ADD",r[r.COPY=1]="COPY",r[r.DELETE=2]="DELETE",r[r.MODIFY=3]="MODIFY",r[r.RENAME=4]="RENAME",r[r.TYPE=5]="TYPE",r[r.UNKNOWN=6]="UNKNOWN",r[r.UNMERGED=7]="UNMERGED",r))(Cs||{});const uo=class uo{constructor(a,u,d,c,p,v,y){this.baseCommit=a,this.status=u,this.fileName=d,this.previousFileName=c,this.patch=p,this.diffHunks=v,this.blobUrl=y}};i(uo,"file_InMemFileChange");let Ji=uo;const co=class co{constructor(a,u,d,c,p){this.baseCommit=a,this.blobUrl=u,this.status=d,this.fileName=c,this.previousFileName=p}};i(co,"file_SlimFileChange");let An=co;var ys=Object.defineProperty,ws=i((r,a,u)=>a in r?ys(r,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):r[a]=u,"diffHunk_defNormalProp"),Go=i((r,a,u)=>ws(r,typeof a!="symbol"?a+"":a,u),"diffHunk_publicField"),Xo=(r=>(r[r.Context=0]="Context",r[r.Add=1]="Add",r[r.Delete=2]="Delete",r[r.Control=3]="Control",r))(Xo||{});const fo=class fo{constructor(a,u,d,c,p,v=!0){this.type=a,this.oldLineNumber=u,this.newLineNumber=d,this.positionInHunk=c,this.raw=p,this.endwithLineBreak=v}get text(){return this.raw.substr(1)}};i(fo,"DiffLine");let vr=fo;function el(r){switch(r[0]){case" ":return 0;case"+":return 1;case"-":return 2;default:return 3}}i(el,"getDiffChangeType");const mo=class mo{constructor(a,u,d,c,p){this.oldLineNumber=a,this.oldLength=u,this.newLineNumber=d,this.newLength=c,this.positionInHunk=p,Go(this,"diffLines",[])}};i(mo,"DiffHunk");let ro=mo;const In=/^@@ \-(\d+)(,(\d+))?( \+(\d+)(,(\d+)?)?)? @@/;function tl(r){let a=0,u=0;for(;(u=r.indexOf("\r",u))!==-1;)u++,a++;return a}i(tl,"countCarriageReturns");function*Cr(r){let a=0;for(;a!==-1&&a<r.length;){const u=a;a=r.indexOf(`
`,a);let c=(a!==-1?a:r.length)-u;a!==-1&&(a>0&&r[a-1]==="\r"&&c--,a++),yield r.substr(u,c)}}i(Cr,"LineReader");function*nl(r){const a=Cr(r);let u=a.next(),d,c=-1,p=-1,v=-1;for(;!u.done;){const y=u.value;if(In.test(y)){d&&(yield d,d=void 0),c===-1&&(c=0);const x=In.exec(y),T=p=Number(x[1]),q=Number(x[3])||1,F=v=Number(x[5]),G=Number(x[7])||1;d=new ro(T,q,F,G,c),d.diffLines.push(new vr(3,-1,-1,c,y))}else if(d){const x=el(y);if(x===3)d.diffLines&&d.diffLines.length&&(d.diffLines[d.diffLines.length-1].endwithLineBreak=!1);else{d.diffLines.push(new vr(x,x!==1?p:-1,x!==2?v:-1,c,y));const T=1+tl(y);switch(x){case 0:p+=T,v+=T;break;case 2:p+=T;break;case 1:v+=T;break}}}c!==-1&&++c,u=a.next()}d&&(yield d)}i(nl,"parseDiffHunk");function xs(r){const a=nl(r);let u=a.next();const d=[];for(;!u.done;){const c=u.value;d.push(c),u=a.next()}return d}i(xs,"parsePatch");function Fn(r){const a=[],u=i(x=>({diffLines:[],newLength:0,oldLength:0,oldLineNumber:x.oldLineNumber,newLineNumber:x.newLineNumber,positionInHunk:0}),"newHunk");let d,c;const p=i((x,T)=>{x.diffLines.push(T),T.type===2?x.oldLength++:T.type===1?x.newLength++:T.type===0&&(x.oldLength++,x.newLength++)},"addLineToHunk"),v=i(x=>x.diffLines.some(T=>T.type!==0),"hunkHasChanges"),y=i(x=>v(x)&&x.diffLines[x.diffLines.length-1].type===0,"hunkHasSandwichedChanges");for(const x of r.diffLines)x.type===0?(d||(d=u(x)),p(d,x),y(d)&&(c||(c=u(x)),p(c,x))):(d||r.oldLineNumber===1&&(x.type===2||x.type===1))&&(d||(d=u(x)),y(d)&&(a.push(d),d=c,c=void 0),(x.type===2||x.type===1)&&p(d,x));return d&&a.push(d),a}i(Fn,"splitIntoSmallerHunks");function _a(r,a){const u=r.split(/\r?\n/),d=nl(a);let c=d.next();const p=[],v=[];let y=0,x=!0;for(;!c.done;){const T=c.value;p.push(T);const q=T.oldLineNumber;for(let F=y+1;F<q;F++)v.push(u[F-1]);y=q+T.oldLength-1;for(let F=0;F<T.diffLines.length;F++){const G=T.diffLines[F];if(!(G.type===2||G.type===3))if(G.type===1)v.push(G.text);else{const fe=G.text;v.push(fe)}}if(c=d.next(),c.done){for(let F=T.diffLines.length-1;F>=0;F--)if(T.diffLines[F].type!==2){x=T.diffLines[F].endwithLineBreak;break}}}if(x)if(y<u.length)for(let T=y+1;T<=u.length;T++)v.push(u[T-1]);else v.push("");return v.join(`
`)}i(_a,"getModifiedContentFromDiffHunk");function yr(r){switch(r){case"removed":return GitChangeType.DELETE;case"added":return GitChangeType.ADD;case"renamed":return GitChangeType.RENAME;case"modified":return GitChangeType.MODIFY;default:return GitChangeType.UNKNOWN}}i(yr,"getGitChangeType");async function Ma(r,a){var u;const d=[];for(let c=0;c<r.length;c++){const p=r[c],v=yr(p.status);if(!p.patch&&v!==GitChangeType.RENAME&&v!==GitChangeType.MODIFY&&!(v===GitChangeType.ADD&&p.additions===0)){d.push(new SlimFileChange(a,p.blob_url,v,p.filename,p.previous_filename));continue}const y=p.patch?xs(p.patch):void 0;d.push(new InMemFileChange(a,v,p.filename,p.previous_filename,(u=p.patch)!=null?u:"",y,p.blob_url))}return d}i(Ma,"parseDiff");function rl({hunks:r}){return l.createElement("div",{className:"diff"},r.map((a,u)=>l.createElement(Jo,{key:u,hunk:a})))}i(rl,"Diff");const Hn=rl,Jo=i(({hunk:r,maxLines:a=8})=>l.createElement(l.Fragment,null,r.diffLines.slice(-a).map(u=>l.createElement("div",{key:wr(u),className:`diffLine ${ol(u.type)}`},l.createElement(oo,{num:u.oldLineNumber}),l.createElement(oo,{num:u.newLineNumber}),l.createElement("div",{className:"diffTypeSign"},u.raw.substr(0,1)),l.createElement("div",{className:"lineContent"},u.raw.substr(1))))),"Hunk"),wr=i(r=>`${r.oldLineNumber}->${r.newLineNumber}`,"keyForDiffLine"),oo=i(({num:r})=>l.createElement("div",{className:"lineNumber"},r>0?r:" "),"LineNumber"),ol=i(r=>Xo[r].toLowerCase(),"getDiffChangeClass");function il(r){return r.event===je.Assigned||r.event===je.Unassigned}i(il,"isAssignUnassignEvent");const Es=i(({events:r,isIssue:a})=>{var u,d,c,p;const v=[];for(let y=0;y<r.length;y++)if(y>0&&il(r[y])&&il(v[v.length-1])){const x=v[v.length-1],T=r[y];if(x.actor.login===T.actor.login&&new Date(x.createdAt).getTime()+1e3*60*10>new Date(T.createdAt).getTime()){const q=x.assignees||[],F=x.unassignees||[],G=(d=(u=T.assignees)==null?void 0:u.filter(Q=>!q.some(de=>de.id===Q.id)))!=null?d:[],fe=(p=(c=T.unassignees)==null?void 0:c.filter(Q=>!F.some(de=>de.id===Q.id)))!=null?p:[];x.assignees=[...q,...G],x.unassignees=[...F,...fe]}else v.push(T)}else v.push(r[y]);return l.createElement(l.Fragment,null,v.map(y=>{switch(y.event){case je.Committed:return l.createElement(io,{key:`commit${y.id}`,...y});case je.Reviewed:return l.createElement(Ss,{key:`review${y.id}`,...y});case je.Commented:return l.createElement(Ns,{key:`comment${y.id}`,...y});case je.Merged:return l.createElement(Rs,{key:`merged${y.id}`,...y});case je.Assigned:return l.createElement(Qe,{key:`assign${y.id}`,event:y});case je.Unassigned:return l.createElement(Qe,{key:`unassign${y.id}`,event:y});case je.HeadRefDeleted:return l.createElement(Ps,{key:`head${y.id}`,...y});case je.CrossReferenced:return l.createElement(ei,{key:`cross${y.id}`,...y});case je.Closed:return l.createElement(nt,{key:`closed${y.id}`,event:y,isIssue:a});case je.Reopened:return l.createElement(on,{key:`reopened${y.id}`,event:y,isIssue:a});case je.NewCommitsSinceReview:return l.createElement(ks,{key:`newCommits${y.id}`});case je.CopilotStarted:return l.createElement(ut,{key:`copilotStarted${y.id}`,...y});case je.CopilotFinished:return l.createElement(Et,{key:`copilotFinished${y.id}`,...y});case je.CopilotFinishedError:return l.createElement(xn,{key:`copilotFinishedError${y.id}`,...y});default:throw new $r(y)}}))},"Timeline"),Sa=null;function bs({status:r}){switch(r){case"PENDING":return he;case"SUCCESS":return oe;case"FAILURE":case"ERROR":return ce}return null}i(bs,"CommitStateIcon");const io=i(r=>{var a;const u=(0,l.useContext)(Ae),[d,c]=(0,l.useState)(void 0),p=i((y,x)=>{y.preventDefault(),c(x),u.openCommitChanges(r.sha).finally(()=>{c(void 0)})},"handleCommitClick"),v=((a=u.pr)==null?void 0:a.loadingCommit)===r.sha;return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},ht,lt,l.createElement("div",{className:"avatar-container"},l.createElement(St,{for:r.author})),l.createElement("div",{className:"message-container"},l.createElement("a",{className:"message",onClick:i(y=>p(y,"title"),"onClick"),title:r.htmlUrl},r.message.substr(0,r.message.indexOf(`
`)>-1?r.message.indexOf(`
`):r.message.length)),v&&d==="title"&&l.createElement("span",{className:"commit-spinner-inline"},P))),l.createElement("div",{className:"timeline-detail"},l.createElement("div",{className:"status-section"},l.createElement(bs,{status:r.status})),l.createElement("a",{className:"sha",onClick:i(y=>p(y,"sha"),"onClick"),title:r.htmlUrl},v&&d==="sha"&&l.createElement("span",{className:"commit-spinner-before"},P),r.sha.slice(0,7)),l.createElement(Pt,{date:r.committedDate})))},"CommitEventView"),ks=i(()=>{const{gotoChangesSinceReview:r,pr:a}=(0,l.useContext)(Ae);if(!a.isCurrentlyCheckedOut)return null;const[u,d]=(0,l.useState)(!1),c=i(async()=>{d(!0),await r(),d(!1)},"viewChanges");return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},$,lt,l.createElement("span",{style:{fontWeight:"bold"}},"New changes since your last Review")),l.createElement("button",{"aria-live":"polite",title:"View the changes since your last review",onClick:c,disabled:u},"View Changes"))},"NewCommitsSinceReviewEventView"),_s=i(r=>r.position!==null?`pos:${r.position}`:`ori:${r.originalPosition}`,"positionKey"),Ms=i(r=>bo(r,a=>a.path+":"+_s(a)),"groupCommentsByPath"),Ss=i(r=>{const a=Ms(r.comments),u=r.state==="PENDING";return l.createElement(gn,{comment:r,allowEmpty:!0},r.comments.length?l.createElement("div",{className:"comment-body review-comment-body"},Object.entries(a).map(([d,c])=>l.createElement(Ls,{key:d,thread:c,event:r}))):null,u?l.createElement(Ts,null):null)},"ReviewEventView");function Ls({thread:r,event:a}){var u;const d=r[0],[c,p]=(0,l.useState)(!d.isResolved),[v,y]=(0,l.useState)(!!d.isResolved),{openDiff:x,toggleResolveComment:T}=(0,l.useContext)(Ae),q=a.reviewThread&&(a.reviewThread.canResolve&&!a.reviewThread.isResolved||a.reviewThread.canUnresolve&&a.reviewThread.isResolved),F=i(()=>{if(a.reviewThread){const G=!v;p(!G),y(G),T(a.reviewThread.threadId,r,G)}},"toggleResolve");return l.createElement("div",{key:a.id,className:"diff-container"},l.createElement("div",{className:"resolved-container"},l.createElement("div",null,d.position===null?l.createElement("span",null,l.createElement("span",null,d.path),l.createElement("span",{className:"outdatedLabel"},"Outdated")):l.createElement("a",{className:"diffPath",onClick:i(()=>x(d),"onClick")},d.path),!v&&!c?l.createElement("span",{className:"unresolvedLabel"},"Unresolved"):null),l.createElement("button",{className:"secondary",onClick:i(()=>p(!c),"onClick")},c?"Hide":"Show")),c?l.createElement("div",null,l.createElement(Hn,{hunks:(u=d.diffHunks)!=null?u:[]}),r.map(G=>l.createElement(gn,{key:G.id,comment:G})),q?l.createElement("div",{className:"resolve-comment-row"},l.createElement("button",{className:"secondary comment-resolve",onClick:i(()=>F(),"onClick")},v?"Unresolve Conversation":"Resolve Conversation")):null):null)}i(Ls,"CommentThread");function Ts(){const{requestChanges:r,approve:a,submit:u,deleteReview:d,pr:c}=(0,l.useContext)(Ae),p=c==null?void 0:c.isAuthor,v=(0,l.useRef)(),[y,x]=(0,l.useState)(!1),[T,q]=(0,l.useState)("");async function F(le,Se){le.preventDefault();const be=T;switch(x(!0),Se){case qe.RequestChanges:await r(be);break;case qe.Approve:await a(be);break;default:await u(be)}x(!1)}i(F,"submitAction");async function G(le){le.preventDefault(),x(!0),await d(),x(!1)}i(G,"cancelReview");const fe=i(le=>{(le.ctrlKey||le.metaKey)&&le.key==="Enter"&&F(le,qe.Comment)},"onKeyDown"),Q=i(le=>{q(le.target.value)},"onTextareaChange"),de=!T.trim()&&!c.hasReviewDraft;return l.createElement("form",null,l.createElement("textarea",{id:"pending-review",ref:v,placeholder:"Leave a review summary comment",onKeyDown:fe,onChange:Q,value:T}),l.createElement("div",{className:"form-actions"},l.createElement("button",{id:"cancel-review",className:"secondary",disabled:y||(c==null?void 0:c.busy),onClick:G},"Cancel Review"),p?null:l.createElement("button",{id:"request-changes",className:"secondary",disabled:y||c.busy||de,onClick:i(le=>F(le,qe.RequestChanges),"onClick")},"Request Changes"),p?null:l.createElement("button",{id:"approve",className:"secondary",disabled:y||c.busy,onClick:i(le=>F(le,qe.Approve),"onClick")},"Approve"),l.createElement("button",{disabled:y||c.busy||de,onClick:i(le=>F(le,qe.Comment),"onClick")},"Submit Review")))}i(Ts,"AddReviewSummaryComment");const Ns=i(r=>l.createElement(gn,{headerInEditMode:!0,comment:r}),"CommentEventView"),Rs=i(r=>{const{revert:a,pr:u}=(0,l.useContext)(Ae);return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},Be,lt,l.createElement("div",{className:"avatar-container"},l.createElement(St,{for:r.user})),l.createElement(Ct,{for:r.user}),l.createElement("div",{className:"message"},"merged commit",lt,l.createElement("a",{className:"sha",href:r.commitUrl,title:r.commitUrl},r.sha.substr(0,7)),lt,"into ",r.mergeRef,lt)),u.revertable?l.createElement("div",{className:"timeline-detail"},l.createElement("button",{className:"secondary",disabled:u.busy,onClick:a},"Revert")):null,l.createElement(Pt,{href:r.url,date:r.createdAt}))},"MergedEventView"),Ps=i(r=>l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},l.createElement("div",{className:"avatar-container"},l.createElement(St,{for:r.actor})),l.createElement(Ct,{for:r.actor}),l.createElement("div",{className:"message"},"deleted the ",r.headRef," branch",lt)),l.createElement(Pt,{date:r.createdAt})),"HeadDeleteEventView"),ei=i(r=>{const{source:a}=r;return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},l.createElement("div",{className:"avatar-container"},l.createElement(St,{for:r.actor})),l.createElement(Ct,{for:r.actor}),l.createElement("div",{className:"message"},"linked ",l.createElement("a",{href:a.extensionUrl},"#",a.number)," ",a.title,lt,r.willCloseTarget?"which will close this issue":"")),l.createElement(Pt,{date:r.createdAt}))},"CrossReferencedEventView");function wn(r){return r.length===0?l.createElement(l.Fragment,null):r.length===1?r[0]:r.length===2?l.createElement(l.Fragment,null,r[0]," and ",r[1]):l.createElement(l.Fragment,null,r.slice(0,-1).map(a=>l.createElement(l.Fragment,null,a,", "))," and ",r[r.length-1])}i(wn,"timeline_joinWithAnd");const Qe=i(({event:r})=>{const{actor:a}=r,u=r.assignees||[],d=r.unassignees||[],c=wn(u.map(y=>l.createElement(Ct,{key:`${y.id}a`,for:y}))),p=wn(d.map(y=>l.createElement(Ct,{key:`${y.id}u`,for:y})));let v;return u.length>0&&d.length>0?v=l.createElement(l.Fragment,null,"assigned ",c," and unassigned ",p):u.length>0?v=l.createElement(l.Fragment,null,"assigned ",c):v=l.createElement(l.Fragment,null,"unassigned ",p),l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},l.createElement("div",{className:"avatar-container"},l.createElement(St,{for:a})),l.createElement(Ct,{for:a}),l.createElement("div",{className:"message"},v)),l.createElement(Pt,{date:r.createdAt}))},"AssignUnassignEventView"),nt=i(({event:r,isIssue:a})=>{const{actor:u,createdAt:d}=r;return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},l.createElement("div",{className:"avatar-container"},l.createElement(St,{for:u})),l.createElement(Ct,{for:u}),l.createElement("div",{className:"message"},a?"closed this issue":"closed this pull request")),l.createElement(Pt,{date:d}))},"ClosedEventView"),on=i(({event:r,isIssue:a})=>{const{actor:u,createdAt:d}=r;return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},l.createElement("div",{className:"avatar-container"},l.createElement(St,{for:u})),l.createElement(Ct,{for:u}),l.createElement("div",{className:"message"},a?"reopened this issue":"reopened this pull request")),l.createElement(Pt,{date:d}))},"ReopenedEventView"),ut=i(r=>{const{createdAt:a,onBehalfOf:u,sessionLink:d}=r,{openSessionLog:c}=(0,l.useContext)(Ae),p=i(v=>{d&&(d.openToTheSide=v.ctrlKey||v.metaKey,c(d))},"handleSessionLogClick");return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},Vl,lt,l.createElement("div",{className:"message"},"Copilot started work on behalf of ",l.createElement(Ct,{for:u}))),d?l.createElement("div",{className:"timeline-detail"},l.createElement("a",{onClick:p},l.createElement("button",{className:"secondary",title:"View session log (Ctrl/Cmd+Click to open in second editor group)"},"View session"))):null,l.createElement(Pt,{date:a}))},"CopilotStartedEventView"),Et=i(r=>{const{createdAt:a,onBehalfOf:u}=r;return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"commit-message"},wo,lt,l.createElement("div",{className:"message"},"Copilot finished work on behalf of ",l.createElement(Ct,{for:u}))),l.createElement(Pt,{date:a}))},"CopilotFinishedEventView"),xn=i(r=>{const{createdAt:a,onBehalfOf:u}=r,{openSessionLog:d}=(0,l.useContext)(Ae),c=i(p=>{r.sessionLink.openToTheSide=p.ctrlKey||p.metaKey,d(r.sessionLink)},"handleSessionLogClick");return l.createElement("div",{className:"comment-container commit"},l.createElement("div",{className:"timeline-with-detail"},l.createElement("div",{className:"commit-message"},Xe,lt,l.createElement("div",{className:"message"},"Copilot stopped work on behalf of ",l.createElement(Ct,{for:u})," due to an error")),l.createElement("div",{className:"commit-message-detail"},l.createElement("a",{onClick:c,title:"View session log (Ctrl/Cmd+Click to open in second editor group)"},"Copilot has encountered an error. See logs for additional details."))),l.createElement(Pt,{date:a}))},"CopilotFinishedErrorEventView"),$n=i(r=>{const[a,u]=l.useState(window.matchMedia(r).matches);return l.useEffect(()=>{const d=window.matchMedia(r),c=i(()=>u(d.matches),"documentChangeHandler");return d.addEventListener("change",c),()=>{d.removeEventListener("change",c)}},[r]),a},"useMediaQuery"),bt=i(r=>{const a=$n("(max-width: 768px)");return l.createElement(l.Fragment,null,l.createElement("div",{id:"title",className:"title"},l.createElement("div",{className:"details"},l.createElement(Vi,{...r}))),a?l.createElement(l.Fragment,null,l.createElement(Xi,{...r}),l.createElement(xr,{...r})):l.createElement(l.Fragment,null,l.createElement(xr,{...r}),l.createElement(Yo,{...r})))},"Overview"),xr=i(r=>l.createElement("div",{id:"main"},l.createElement("div",{id:"description"},l.createElement(gn,{isPRDescription:!0,comment:r})),l.createElement(Es,{events:r.events,isIssue:r.isIssue}),l.createElement(as,{pr:r,isSimple:!1}),l.createElement(Ii,{...r})),"Main");function ll(){(0,ie.render)(l.createElement(sl,null,r=>l.createElement(bt,{...r})),document.getElementById("app"))}i(ll,"main");function sl({children:r}){const a=(0,l.useContext)(Ae),[u,d]=(0,l.useState)(a.pr);return(0,l.useEffect)(()=>{a.onchange=d,d(a.pr)},[]),window.onscroll=R(()=>{a.postMessage({command:"scroll",args:{scrollPosition:{x:window.scrollX,y:window.scrollY}}})},200),a.postMessage({command:"ready"}),a.postMessage({command:"pr.debug",args:"initialized "+(u?"with PR":"without PR")}),u?r(u):l.createElement("div",{className:"loading-indicator"},"Loading...")}i(sl,"Root"),addEventListener("load",ll)})()})();
