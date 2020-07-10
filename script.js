const bicast__data = {
	navID: "nav-projects",
	page_loc_text: "Concept Demo",
	template: `<div id="demo_page" class="demo-page page"><div class="demo_page-head flex"><div class="demo_page-back btn" title="Back to all projects"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z"/></svg></div><div class="demo_page-title">BicastR</div><div class="demo_page-info btn" title="Info"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg></div></div><div class="demo_page-body"><div class="demo_page-cont"><div class="bicast_head flex wrap justify-center"><div class="demo_options device_select"><p class="option-head">Device type</p><div class="option-cont"><button id="dev_grd" type="button" aria-label="switch to grid" class="search-fab elevation-3 btn btn--icon btn--select" style="transform-origin:center center"><div class="btn__content"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2M4,4V11H11V4H4M4,20H11V13H4V20M20,20V13H13V20H20M20,4H13V11H20V4Z"/></svg></div></button><button id="dev_mob" type="button" aria-label="switch to mobile" class="search-fab elevation-3 btn btn--icon" style="transform-origin:center center"><div class="btn__content"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M16,18H7V4H16M11.5,22A1.5,1.5 0 0,1 10,20.5A1.5,1.5 0 0,1 11.5,19A1.5,1.5 0 0,1 13,20.5A1.5,1.5 0 0,1 11.5,22M15.5,1H7.5A2.5,2.5 0 0,0 5,3.5V20.5A2.5,2.5 0 0,0 7.5,23H15.5A2.5,2.5 0 0,0 18,20.5V3.5A2.5,2.5 0 0,0 15.5,1Z"/></svg></div></button><button id="dev_lap" type="button" aria-label="switch to pc" class="search-fab elevation-3 btn btn--icon" style="transform-origin:center center"><div class="btn__content"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M20,15H4V5H20M14,18H10V17H14M22,18V3H2V18H0V20H24V18H22Z"/></svg></div></button></div></div><div class="demo_options media_select"><p class="option-head">Media type</p><div class="option-cont"><button id="med_img" type="button" aria-label="switch to image" class="search-fab elevation-3 btn btn--icon btn--select" style="transform-origin:center center"><div class="btn__content"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20A2,2 0 0,0 4,22H18V20H4V6"/></svg></div></button><button id="med_vid" type="button" aria-label="switch to video" class="search-fab elevation-3 btn btn--icon" style="transform-origin:center center"><div class="btn__content"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M17,10.5L21,6.5V17.5L17,13.5V17A1,1 0 0,1 16,18H4A1,1 0 0,1 3,17V7A1,1 0 0,1 4,6H16A1,1 0 0,1 17,7V10.5M10.91,9.55L9.2,11.82L10.5,13.55L9.77,14.09L7.73,11.36L5,15H15L10.91,9.55Z"/></svg></div></button></div></div><div class="demo_options device_add"><p class="option-head">Adjust devices</p><div class="option-cont"><div class="flex row justify-center align-center relative input-group input-group--hide-details input-group--text-field input-group--single-line"><div class="input-group__input"><input placeholder="rows" autocomplete="off" autocapitalize="off" spellcheck="false" type="text" value="" data-embd="" data-drct=""><input placeholder="cols" autocomplete="off" autocapitalize="off" spellcheck="false" type="text" value="" data-embd="" data-drct=""></div><div class="input-group__details"></div></div><div class="dev_add_btn flex row"><button id="dev_add" type="button" aria-label="switch to image" class="search-fab elevation-3 btn" style="transform-origin:center center"><div class="btn__content"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/></svg></div></button></div></div></div></div><div class="bicast_tip" style="display:flex;flex-direction:row;justify-content:center"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z"/></svg><p>Drag the image in any one of device</p></div><div class="bicast_body flex justify-center align-center"><div class="demo_devices grid_mode"><table><tr><td><div class="demo_device"><div class="demo_content"></div><div class="device_ring"><svg class="mob_svg" style="width:24px;height:24px;display:none" viewBox="0 0 24 24"><path fill="currentColor" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"/></svg><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/></svg><svg class="mob_svg" style="width:24px;height:24px;display:none" viewBox="0 0 24 24"><path fill="#ffffff" d="M18,18H6V6H18M18,4H6A2,2 0 0,0 4,6V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18V6C20,4.89 19.1,4 18,4Z"/></svg></div></div></td><td><div class="demo_device demo_mobile"><div class="demo_content"></div><div class="device_ring"><svg class="mob_svg" style="width:24px;height:24px;display:none" viewBox="0 0 24 24"><path fill="currentColor" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"/></svg><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/></svg><svg class="mob_svg" style="width:24px;height:24px;display:none" viewBox="0 0 24 24"><path fill="#ffffff" d="M18,18H6V6H18M18,4H6A2,2 0 0,0 4,6V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18V6C20,4.89 19.1,4 18,4Z"/></svg></div></div></td></tr><tr><td><div class="demo_device demo_mobile"><div class="demo_content"></div><div class="device_ring"><svg class="mob_svg" style="width:24px;height:24px;display:none" viewBox="0 0 24 24"><path fill="currentColor" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"/></svg><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/></svg><svg class="mob_svg" style="width:24px;height:24px;display:none" viewBox="0 0 24 24"><path fill="#ffffff" d="M18,18H6V6H18M18,4H6A2,2 0 0,0 4,6V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18V6C20,4.89 19.1,4 18,4Z"/></svg></div></div></td><td><div class="demo_device demo_mobile"><div class="demo_content"></div><div class="device_ring"><svg class="mob_svg" style="width:24px;height:24px;display:none" viewBox="0 0 24 24"><path fill="currentColor" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"/></svg><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/></svg><svg class="mob_svg" style="width:24px;height:24px;display:none" viewBox="0 0 24 24"><path fill="#ffffff" d="M18,18H6V6H18M18,4H6A2,2 0 0,0 4,6V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18V6C20,4.89 19.1,4 18,4Z"/></svg></div></div></td></tr></table></div></div><div class="bicast_tips flex justify-center align-center"><div class="tips_cont"><div class="tips_head">Tips and Info</div><div class="tips_body"><ul><li>The idea is to create a larger display using many smaller displays</li><li>If you're on portrait device, switch to landscape mode for better interaction <svg style="width:16px;height:16px" viewBox="0 0 24 24"><path fill="#ffffff" d="M9,1H3A2,2 0 0,0 1,3V16A2,2 0 0,0 3,18H9A2,2 0 0,0 11,16V3A2,2 0 0,0 9,1M9,15H3V3H9V15M21,13H13V15H21V21H9V20H6V21A2,2 0 0,0 8,23H21A2,2 0 0,0 23,21V15A2,2 0 0,0 21,13M23,10L19,8L20.91,7.09C19.74,4.31 17,2.5 14,2.5V1A9,9 0 0,1 23,10Z"/></svg></li><li>Simulate different devices - grid of displays <span><svg style="width:16px;height:16px" viewBox="0 0 24 24"><path fill="#ffffff" d="M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2M4,4V11H11V4H4M4,20H11V13H4V20M20,20V13H13V20H20M20,4H13V11H20V4Z"/></svg></span>, mobile <span><svg style="width:16px;height:16px" viewBox="0 0 24 24"><path fill="#ffffff" d="M16,18H7V4H16M11.5,22A1.5,1.5 0 0,1 10,20.5A1.5,1.5 0 0,1 11.5,19A1.5,1.5 0 0,1 13,20.5A1.5,1.5 0 0,1 11.5,22M15.5,1H7.5A2.5,2.5 0 0,0 5,3.5V20.5A2.5,2.5 0 0,0 7.5,23H15.5A2.5,2.5 0 0,0 18,20.5V3.5A2.5,2.5 0 0,0 15.5,1Z"/></svg></span> and PC <svg style="width:16px;height:16px" viewBox="0 0 24 24"><path fill="#ffffff" d="M20,15H4V5H20M14,18H10V17H14M22,18V3H2V18H0V20H24V18H22Z"></path></svg></li><li>Best viewed on grid-mode (change <i>Device type</i> to grid <span><svg style="width:16px;height:16px" viewBox="0 0 24 24"><path fill="#ffffff" d="M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4C2.92,22 2,21.1 2,20V4A2,2 0 0,1 4,2M4,4V11H11V4H4M4,20H11V13H4V20M20,20V13H13V20H20M20,4H13V11H20V4Z"/></svg></span>)</li><li>Media includes - Image <span><svg style="width:16px;height:16px" viewBox="0 0 24 24"><path fill="#ffffff" d="M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20A2,2 0 0,0 4,22H18V20H4V6"></path></svg></span> and Video <span><svg style="width:16px;height:16px" viewBox="0 0 24 24"><path fill="#ffffff" d="M17,10.5L21,6.5V17.5L17,13.5V17A1,1 0 0,1 16,18H4A1,1 0 0,1 3,17V7A1,1 0 0,1 4,6H16A1,1 0 0,1 17,7V10.5M10.91,9.55L9.2,11.82L10.5,13.55L9.77,14.09L7.73,11.36L5,15H15L10.91,9.55Z"></path></svg></span></li><li>In image mode, drag the image inside device to view effect</li><li>In video mode, play/pause/seek the video inside device to view effect</li><li>Adjust display matrix using options</li><li>This is a concept demo, where server has been eliminated. Actual process has a central server for communication between devices.</li><li>View code on <a href="https://github.com/ankurparihar/BicastR" rel="noopener" target="_blank" class="highlight">Github</a></li></ul></div></div></div></div></div></div>`,
	apply: (root, URLInfo) => {
		if (root === undefined) {
			console.warn('Error: contentRoot not specified')
			return
		}
		root.innerHTML = bicast__data.template
		bicast__data.onStaticLoad(root, URLInfo)
	},
	onStaticLoad: (root, URLInfo) => {
		if (root === undefined) {
			console.warn('Error: contentRoot not specified')
			return
		}
		const demoBackBtn = root.querySelector('.demo_page-back')
		const demoInfoBtn = root.querySelector('.demo_page-info')
		demoBackBtn.addEventListener('click', (e) => {
			if (e.ctrlKey) window.open(URLInfo.protocol + '://' + URLInfo.domain + '/projects')
			else {
				spa.navigate(URLInfo.protocol + '://' + URLInfo.domain + '/projects')
			}
			e.preventDefault()
		})
		demoInfoBtn.addEventListener('click', () => {
			showDialog(`<div class="card" style="height:auto"><div class="card__title headline">About BicastR</div><div class="card__text">BicastR can displays large image or video which doesn't fit on a single display, on multiple displays which put together re-creates the entire media and provides a rich viewing experience. It creates the effect of a larger display using combination of smaller displays.</div><div class="card__actions"><div class="spacer"></div><a target="_blank" rel="noopener" href="https://github.com/ankurparihar/BicastR" class="btn btn--flat green--text text--darken-1"><div class="btn__content">View on Github</div></a></div></div>`)
		})
		const lap_btn = document.getElementById('dev_lap')
		const mob_btn = document.getElementById('dev_mob')
		const grd_btn = document.getElementById('dev_grd')
		const demo_devices = root.querySelector('.bicast_body .demo_devices')
		bicast__data.table = demo_devices.querySelector('table')
		const med_img = document.getElementById('med_img')
		const med_vid = document.getElementById('med_vid')
		const in_row = root.querySelector('.demo_options input[placeholder="rows"]')
		const in_col = root.querySelector('.demo_options input[placeholder="cols"]')
		const dev_add = document.getElementById('dev_add')
		const tip = root.querySelector('.demo_page-cont .bicast_tip p')
		lap_btn.onclick = () => {
			if (bicast__data.device != 'dev_lap') {
				document.getElementById(bicast__data.device).classList.remove('btn--select')
				bicast__data.device = 'dev_lap'
				lap_btn.classList.add('btn--select')
				demo_devices.classList.remove('grid_mode')
				demo_devices.querySelectorAll('.demo_device').forEach(dev => {
					dev.classList.remove('demo_mobile')
					dev.classList.add('demo_laptop')
				})
				bicast__data.configureMedia()
			}
		}
		mob_btn.onclick = () => {
			if (bicast__data.device != 'dev_mob') {
				document.getElementById(bicast__data.device).classList.remove('btn--select')
				bicast__data.device = 'dev_mob'
				mob_btn.classList.add('btn--select')
				demo_devices.classList.remove('grid_mode')
				demo_devices.querySelectorAll('.demo_device').forEach(dev => {
					dev.classList.remove('demo_laptop')
					dev.classList.add('demo_mobile')
				})
				bicast__data.configureMedia()
			}
		}
		grd_btn.onclick = () => {
			if (bicast__data.device != 'dev_grd') {
				document.getElementById(bicast__data.device).classList.remove('btn--select')
				bicast__data.device = 'dev_grd'
				grd_btn.classList.add('btn--select')
				demo_devices.classList.add('grid_mode')
				bicast__data.configureMedia()
			}
		}
		med_img.onclick = () => {
			if (bicast__data.mediaMode != 'image') {
				med_vid.classList.remove('btn--select')
				med_img.classList.add('btn--select')
				bicast__data.mediaMode = 'image'
				bicast__data.configureMedia()
				tip.innerHTML = 'Drag the image in any one of device'
			}
		}
		med_vid.onclick = () => {
			if (bicast__data.mediaMode != 'video') {
				med_img.classList.remove('btn--select')
				med_vid.classList.add('btn--select')
				bicast__data.mediaMode = 'video'
				bicast__data.configureMedia()
				tip.innerHTML = 'Play/Pause or Seek the video in any one of device'
			}
		}
		dev_add.onclick = () => {
			var row = parseInt(in_row.value)
			var col = parseInt(in_col.value)
			if (row > 0 && col > 0) {
				bicast__data.table.innerHTML = ''
				for (var i = 0; i < row; i++) {
					const tr = document.createElement('tr')
					for (var j = 0; j < col; j++) {
						const td = document.createElement('td')
						td.innerHTML = `<div class="demo_device demo_mobile"><div class="demo_content"></div><div class="device_ring"><svg class="mob_svg" style="width:24px;height:24px;display:none" viewBox="0 0 24 24"><path fill="#ffffff" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"/></svg><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/></svg><svg class="mob_svg" style="width:24px;height:24px;display:none" viewBox="0 0 24 24"><path fill="#ffffff" d="M18,18H6V6H18M18,4H6A2,2 0 0,0 4,6V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18V6C20,4.89 19.1,4 18,4Z"/></svg></div></div>`
						tr.appendChild(td)
					}
					bicast__data.table.appendChild(tr)
				}
				bicast__data.configureMedia()
			}
		}
		// Initialize with image
		const width = window.innerWidth
		var rows = 2
		var cols = 2
		bicast__data.mediaMode = 'image'
		bicast__data.device = 'dev_grd'
		if (width >= 1100) {
			rows = 2
			cols = 3
		}
		bicast__data.table.innerHTML = ''
		for (var i = 0; i < rows; i++) {
			const tr = document.createElement('tr')
			for (var j = 0; j < cols; j++) {
				const td = document.createElement('td')
				td.innerHTML = `<div class="demo_device demo_mobile"><div class="demo_content"></div><div class="device_ring"><svg class="mob_svg" style="width:24px;height:24px;display:none" viewBox="0 0 24 24"><path fill="currentColor" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"/></svg><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/></svg><svg class="mob_svg" style="width:24px;height:24px;display:none" viewBox="0 0 24 24"><path fill="#ffffff" d="M18,18H6V6H18M18,4H6A2,2 0 0,0 4,6V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18V6C20,4.89 19.1,4 18,4Z"/></svg></div></div>`
				tr.appendChild(td)
			}
			bicast__data.table.appendChild(tr)
		}
		bicast__data.configureMedia()
	},
	mediaImage: () => {
		var row = 0
		var col = 0
		bicast__data.table.querySelectorAll('tr').forEach(tr => {
			col = 0
			tr.querySelectorAll('td').forEach(td => {
				const div = td.querySelector('.demo_content')
				const dim = div.getBoundingClientRect()
				const dev_hei = dim.height, dev_wid = dim.width
				const img = document.createElement('img')
				img.src = bicast__data.imgSrc
				div.innerHTML = ''
				div.appendChild(img)
				img.style.top = 0 - row * dev_hei + 'px'
				img.style.left = 0 - col * dev_wid + 'px'
				bicast__data.dragElement(img, row, col)
				bicast__data.dragTouchElement(img, row, col)
				col++
			})
			row++
		})
	},
	mediaVideo: () => {
		var row = 0
		var col = 0
		bicast__data.table.querySelectorAll('tr').forEach(tr => {
			col = 0
			tr.querySelectorAll('td').forEach(td => {
				const div = td.querySelector('.demo_content')
				const dim = div.getBoundingClientRect()
				const dev_hei = dim.height, dev_wid = dim.width
				const vid = document.createElement('video')
				vid.src = bicast__data.vidSrc
				vid.controls = true
				if (row != 0 || col != 0) vid.muted = true
				div.innerHTML = ''
				div.appendChild(vid)
				vid.style.top = 0 - row * dev_hei + 'px'
				vid.style.left = 0 - col * dev_wid + 'px'
				vid.onplay = () => {
					if ((vid.getAttribute('cause') != '1') && (vid.getAttribute('effect') != '1')) {
						vid.setAttribute('cause', '1')
						bicast__data.inform_server(1, ['play', vid.currentTime])
						vid.removeAttribute('cause')
					}
					if (vid.getAttribute('effect') == '1') vid.removeAttribute('effect')
				}
				vid.onpause = () => {
					if ((vid.getAttribute('cause') != '1') && (vid.getAttribute('effect') != '1')) {
						vid.setAttribute('cause', '1')
						bicast__data.inform_server(1, ['pause', vid.currentTime])
						vid.removeAttribute('cause')
					}
					if (vid.getAttribute('effect') == '1') vid.removeAttribute('effect')
				}
				vid.onseeking = () => {
					if ((vid.getAttribute('cause') != '1') && (vid.getAttribute('effect') != '1')) {
						vid.setAttribute('cause', '1')
						bicast__data.inform_server(1, ['seek', vid.currentTime])
						vid.removeAttribute('cause')
					}
					if (vid.getAttribute('effect') == '1') vid.removeAttribute('effect')
				}
				col++
			})
			row++
		})
	},
	inform_server: (type, data) => {
		if (type === 0) {
			// image
			var lrow = 0
			var lcol = 0
			const dim = bicast__data.table.querySelector('img').parentElement.getBoundingClientRect()
			const dev_hei = dim.height, dev_wid = dim.width
			bicast__data.table.querySelectorAll('tr').forEach(tr => {
				lcol = 0
				tr.querySelectorAll('td').forEach(td => {
					const img = td.querySelector('img')
					img.style.top = data[0] - lrow * dev_hei + 'px'
					img.style.left = data[1] - lcol * dev_wid + 'px'
					lcol++
				})
				lrow++
			})
		}
		else if (type === 1) {
			// video
			bicast__data.table.querySelectorAll('video').forEach(vid => {
				if (vid.getAttribute('cause') != '1') {
					vid.setAttribute('effect', '1')
					if (data[0] == 'play') {
						vid.play()
						vid.currentTime = data[1]
					} else if (data[0] == 'pause') {
						vid.pause()
						vid.currentTime = data[1]
					}
					else if (data[0] == 'seek') {
						vid.currentTime = data[1]
					}
				}
			})
		}
	},
	configureMedia: () => {
		var row = 0
		var col = 0
		bicast__data.table.querySelectorAll('tr').forEach(tr => {
			col = 0
			tr.querySelectorAll('td').forEach(td => {
				const div = td.querySelector('.demo_content')
				div.innerHTML = `<div class="dev_conf flex justify-center align-center"><span>${row}</span><span>${col}</span></div>`
				col++
			})
			row++
		})
		if (bicast__data.mediaMode == 'image') {
			setTimeout(bicast__data.mediaImage, 1000)
		}
		else if (bicast__data.mediaMode == 'video') {
			setTimeout(bicast__data.mediaVideo, 1000)
		}
	},
	dragElement: (elmnt, row, col) => {
		var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
		var active = false
		const dim = elmnt.parentElement.getBoundingClientRect()
		const dev_hei = dim.height, dev_wid = dim.width
		elmnt.onmousedown = dragMouseDown
		elmnt.onmousemove = elementDrag
		document.addEventListener('mouseup', () => { active = false })

		function dragMouseDown(e) {
			e = e || window.event
			if (e.cancelable) e.preventDefault()
			// get the mouse cursor position at startup:
			active = true
			pos3 = e.clientX
			pos4 = e.clientY
			// call a function whenever the cursor moves:
		}

		function elementDrag(e) {
			if (active) {
				e = e || window.event
				if (e.cancelable) e.preventDefault()
				// calculate the new cursor position:
				pos1 = pos3 - e.clientX
				pos2 = pos4 - e.clientY
				pos3 = e.clientX
				pos4 = e.clientY
				// set the element's new position:
				elmnt.style.top = (elmnt.offsetTop - pos2) + 'px'
				elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px'
				bicast__data.inform_server(0, [elmnt.offsetTop + row * dev_hei, elmnt.offsetLeft + col * dev_wid])
			}
		}
	},
	dragTouchElement: (elmnt, row, col) => {
		var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
		var active = false
		var x, y
		const dim = elmnt.parentElement.getBoundingClientRect()
		const dev_hei = dim.height, dev_wid = dim.width
		elmnt.addEventListener('touchstart', dragTouchStart)
		elmnt.addEventListener('touchmove', dragTouchMove)
		document.addEventListener('touchend', () => { active = false })

		function dragTouchStart(e) {
			e = e || window.event
			// if (e.cancelable) e.preventDefault()
			active = true
			pos3 = e.touches[0].clientX
			pos4 = e.touches[0].clientY
		}

		function dragTouchMove(e) {
			if (active) {
				e = e || window.event
				if (e.cancelable) e.preventDefault()
				x = e.changedTouches[0].clientX
				y = e.changedTouches[0].clientY
				pos1 = pos3 - x
				pos2 = pos4 - y
				pos3 = x
				pos4 = y
				elmnt.style.top = (elmnt.offsetTop - pos2) + 'px'
				elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px'
				bicast__data.inform_server(0, [elmnt.offsetTop + row * dev_hei, elmnt.offsetLeft + col * dev_wid])
			}
		}
	},
	device: 'dev_mob',
	mediaMode: 'image',
	imgSrc: './media/image.webp',
	vidSrc: './media/video.mp4',
	table: undefined
}


spa.register('/projects/BicastR', bicast__data)