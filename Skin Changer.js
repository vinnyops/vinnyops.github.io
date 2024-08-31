addReplacement('ClientSocket.on("CPacketSpawnPlayer",$=>{const et=j.world.getPlayerById($.id);', `
    if($.socketId === player$1.socketId && enabledModules["AntiBan"])
    {
        hud3D.remove(hud3D.rightArm);
        hud3D.rightArm = undefined;
        player$1.profile.cosmetics.skin = "Yumea";
        $.cosmetics.skin = "Yumea";
        $.cosmetics.cape = "Yumea";
    }
`);
addReplacement('bob:{id:"bob",name:"Bob",tier:0,skinny:!1},', 'Yumea:{id:"Yumea",name:"Yumea",tier:2,skinny:!1},');
addReplacement('cloud:{id:"cloud",name:"Cloud",tier:2},', 'Yumea:{id:"Yumea",name:"Yumea",tier:2},');
addReplacement('async downloadSkin(_){', `
    if (_ == "Yumea")
    {
        const $ = skins[_];
        return new Promise((et, tt) => {
            textureManager.loader.load("https://raw.githubusercontent.com/vinnyops/vinnyops.github.io/main/Yumeaskin.png", rt => {
                const nt = {
                    atlas: rt,
                    id: _,
                    skinny: $.skinny,
                    ratio: rt.image.width / 64
                };
                SkinManager.createAtlasMat(nt), this.skins[_] = nt, et()
            }, void 0, function(rt) {
                console.error(rt), et()
            })
        })
    }
`);
addReplacement('async downloadCape(_){', `
    if (_ == "Yumea")
    {
        const $ = capes[_];
        return new Promise((et, tt) => {
            textureManager.loader.load("https://raw.githubusercontent.com/vinnyops/vinnyops.github.io/main/Yumeaskin.png", rt => {
                const nt = {
                    atlas: rt,
                    id: _,
                    name: $.name,
                    ratio: rt.image.width / 64,
                    rankLevel: $.tier,
                    isCape: !0
                };
                SkinManager.createAtlasMat(nt), this.capes[_] = nt, et()
            }, void 0, function(rt) {
                console.error(rt), et()
            })
        })
    }
`);