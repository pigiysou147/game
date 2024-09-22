declare module '@base/electron-i18n' {
    export function translation(key: string, language?: any): string;
}

declare interface I18NWellDefinedDictionary {
    ['about.title']: [];
    ['about.editor']: [];
    ['about.engine']: [];
    ['about.version']: [];
    ['animator.title']: [];
    ['animator.loading.wait_scene_ready']: [];
    ['animator.loading.init_animation_data']: [];
    ['animator.mask.need_select_node']: [];
    ['animator.mask.need_animation_component']: [];
    ['animator.mask.need_animation_clip']: [];
    ['animator.mask.enter_animation_mode']: [];
    ['animator.mask.add_animation_component']: [];
    ['animator.mask.add_animation_clip']: [];
    ['animator.toolbar.exit']: [];
    ['animator.toolbar.setting']: [];
    ['animator.toolbar.order']: [];
    ['animator.toolbar.jump_first_frame']: [];
    ['animator.toolbar.jump_prev_frame']: [];
    ['animator.toolbar.play_animation']: [];
    ['animator.toolbar.stop_animation']: [];
    ['animator.toolbar.pause_animation']: [];
    ['animator.toolbar.jump_next_frame']: [];
    ['animator.toolbar.jump_last_frame']: [];
    ['animator.toolbar.insert_event']: [];
    ['animator.toolbar.save_clip']: [];
    ['animator.property.title']: [];
    ['animator.property.create_prop']: [];
    ['animator.property.remove_prop']: [];
    ['animator.property.clear_keys']: [];
    ['animator.property.create_key']: [];
    ['animator.property.remove_key']: [];
    ['animator.property.copy_key']: [];
    ['animator.property.paste_key']: [];
    ['animator.property.spacing_key']: [];
    ['animator.property.spacing_frame']: [];
    ['animator.event.title']: [];
    ['animator.event.add_func']: [];
    ['animator.event.del_func']: [];
    ['animator.event.add_params']: [];
    ['animator.event.del_params']: [];
    ['animator.event.clear_params']: [];
    ['animator.event.create']: [];
    ['animator.event.paste']: [];
    ['animator.bezier.title']: [];
    ['animator.bezier.click_to_apply']: [];
    ['animator.node.title']: [];
    ['animator.node.move_data']: [];
    ['animator.node.move_data_to']: [];
    ['animator.node.clear_data']: [];
    ['animator.preview_row.line_tips']: [];
    ['animator.preview_row.open_curve_editor']: [];
    ['animator.preview_row.asset_type_should_be']: [];
    ['animator.preview_row.asset_position_tips']: [];
    ['animator.is_save']: [];
    ['animator.is_save_message']: [];
    ['animator.is_paste_overwrite']: [];
    ['animator.is_paste_overwrite_message']: [];
    ['animator.overwrite']: [];
    ['animator.is_clear']: [];
    ['animator.is_clear_message']: [];
    ['animator.is_move_data']: [];
    ['animator.is_move_data_message']: [];
    ['animator.is_remove_prop.title']: [];
    ['animator.is_remove_prop.message']: [];
    ['animator.is_remove_prop.remove']: [];
    ['animator.is_clear_prop.title']: [];
    ['animator.is_clear_prop.message']: [];
    ['animator.is_clear_prop.remove']: [];
    ['animator.move']: [];
    ['animator.clear']: [];
    ['animator.copy']: [];
    ['animator.paste']: [];
    ['animator.save']: [];
    ['animator.abort']: [];
    ['animator.cancel']: [];
    ['animator.edit']: [];
    ['animator.delete']: [];
    ['animator.toolbar.spacing_frame']: [];
    ['asset-db.mask.startup']: [];
    ['asset-db.mask.loading']: [];
    ['asset-db.debug-mode']: [];
    ['asset-db.operate.dialogError']: [];
    ['asset-db.operate.dialogWarning']: [];
    ['asset-db.operate.dialogQuestion']: [];
    ['asset-db.operate.dialogInfo']: [];
    ['asset-db.fail.readonly']: [];
    ['asset-db.createAsset.fail.unknown']: [];
    ['asset-db.createAsset.fail.url']: [];
    ['asset-db.createAsset.fail.exist']: [];
    ['asset-db.createAsset.fail.drop']: [];
    ['asset-db.createAsset.fail.toUrl']: [];
    ['asset-db.createAsset.fail.uuid']: [];
    ['asset-db.createAsset.fail.content']: [];
    ['asset-db.createAsset.fail.readonly']: [];
    ['asset-db.createAsset.warn.overwrite']: [];
    ['asset-db.dropAsset.overwrite']: [];
    ['asset-db.dropAsset.reserve']: [];
    ['asset-db.dropAsset.fail.unknown']: [];
    ['asset-db.dropAsset.fail.url']: [];
    ['asset-db.dropAsset.fail.filepaths']: [];
    ['asset-db.dropAsset.fail.readonly']: [];
    ['asset-db.dropAsset.warn.overwrite']: [];
    ['asset-db.dropAsset.warn.sameway']: [];
    ['asset-db.saveAsset.fail.unknown']: [];
    ['asset-db.saveAsset.fail.uuid']: [];
    ['asset-db.saveAsset.fail.content']: [];
    ['asset-db.saveAsset.fail.readonly']: [];
    ['asset-db.saveAssetMeta.fail.unknown']: [];
    ['asset-db.saveAssetMeta.fail.uuid']: [];
    ['asset-db.saveAssetMeta.fail.content']: [];
    ['asset-db.saveAssetMeta.fail.readonly']: [];
    ['asset-db.copyAsset.fail.unknown']: [];
    ['asset-db.copyAsset.fail.url']: [];
    ['asset-db.copyAsset.fail.source']: [];
    ['asset-db.copyAsset.fail.target']: [];
    ['asset-db.copyAsset.fail.include']: [];
    ['asset-db.copyAsset.fail.parent']: [];
    ['asset-db.copyAsset.fail.readonly']: [];
    ['asset-db.copyAsset.fail.metauuid']: [];
    ['asset-db.moveAsset.fail.unknown']: [];
    ['asset-db.moveAsset.fail.url']: [];
    ['asset-db.moveAsset.fail.source']: [];
    ['asset-db.moveAsset.fail.target']: [];
    ['asset-db.moveAsset.fail.exist']: [];
    ['asset-db.moveAsset.fail.include']: [];
    ['asset-db.moveAsset.fail.parent']: [];
    ['asset-db.moveAsset.fail.readonly_source']: [];
    ['asset-db.moveAsset.fail.readonly']: [];
    ['asset-db.moveAsset.warn.overwrite']: [];
    ['asset-db.deleteAsset.fail.unknown']: [];
    ['asset-db.deleteAsset.fail.url']: [];
    ['asset-db.deleteAsset.fail.unexist']: [];
    ['asset-db.deleteAsset.fail.readonly']: [];
    ['asset-db.preferences.log_level']: [];
    ['asset-db.preferences.log_level_debug']: [];
    ['asset-db.preferences.log_level_log']: [];
    ['asset-db.preferences.log_level_warn']: [];
    ['asset-db.preferences.log_level_error']: [];
    ['asset-db.importers.glTF.glTF_asset_group_mesh']: [];
    ['asset-db.importers.glTF.glTF_asset_group_animation']: [];
    ['asset-db.importers.glTF.glTF_asset_group_node']: [];
    ['asset-db.importers.glTF.glTF_asset_group_skin']: [];
    ['asset-db.importers.glTF.glTF_asset_group_sampler']: [];
    ['asset-db.importers.glTF.glTF_asset']: [{
        group: any;
        index: any;
        name: any;
    }];
    ['asset-db.importers.glTF.glTF_asset_no_name']: [{
        group: any;
        index: any;
    }];
    ['asset-db.importers.glTF.unsupported_alpha_mode']: [{
        material: any;
        mode: any;
    }];
    ['asset-db.importers.glTF.unsupported_texture_parameter']: [{
        texture: any;
        sampler: any;
        type: any;
        value: any;
    }];
    ['asset-db.importers.glTF.texture_parameter_min_filter']: [];
    ['asset-db.importers.glTF.texture_parameter_mag_filter']: [];
    ['asset-db.importers.glTF.unsupported_channel_path']: [{
        animation: any;
        channel: any;
        path: any;
    }];
    ['asset-db.importers.glTF.reference_skin_in_different_scene']: [{
        node: any;
        skin: any;
    }];
    ['asset-db.importers.glTF.disallow_cubic_spline_channel_split']: [{
        animation: any;
        channel: any;
    }];
    ['asset-db.importers.glTF.failed_to_calculate_tangents_due_to_lack_of_normals']: [{
        mesh: any;
        primitive: any;
    }];
    ['asset-db.importers.glTF.failed_to_calculate_tangents_due_to_lack_of_uvs']: [{
        mesh: any;
        primitive: any;
    }];
    ['asset-db.importers.glTF.failed_to_load_image']: [{
        url: any;
        reason: any;
    }];
    ['asset-db.importers.glTF.image_uri_should_be_file_url']: [];
    ['asset-db.importers.glTF.failed_to_convert_tga']: [];
    ['asset-db.importers.fbx.failed_to_convert_fbx_file']: [{
        path: any;
    }];
    ['asset-db.importers.fbx.no_available_fbx_temp_dir']: [];
    ['asset-db.importers.fbx.fbx2glTF_exists_with_non_zero_code']: [{
        code: any;
        output: any;
    }];
    ['asset-db.importers.javascript.transform_failure']: [{
        path: any;
        reason: any;
    }];
    ['assets.title']: [];
    ['assets.previewTitle']: [];
    ['assets.menu.createMenu']: [];
    ['assets.menu.searchPlaceholder_name']: [];
    ['assets.menu.searchPlaceholder_uuid']: [];
    ['assets.menu.searchPlaceholder_type']: [];
    ['assets.menu.searchTip']: [];
    ['assets.menu.search']: [];
    ['assets.menu.searchName']: [];
    ['assets.menu.searchUuid']: [];
    ['assets.menu.searchType']: [];
    ['assets.menu.sort']: [];
    ['assets.menu.sortName']: [];
    ['assets.menu.sortType']: [];
    ['assets.menu.refresh']: [];
    ['assets.menu.allExpand']: [];
    ['assets.menu.allCollapse']: [];
    ['assets.menu.new']: [];
    ['assets.menu.newFolder']: [];
    ['assets.menu.newJavaScript']: [];
    ['assets.menu.newTypeScript']: [];
    ['assets.menu.newCubeMap']: [];
    ['assets.menu.newScene']: [];
    ['assets.menu.newMaterial']: [];
    ['assets.menu.newPhysicsMaterial']: [];
    ['assets.menu.newEffect']: [];
    ['assets.menu.newChunk']: [];
    ['assets.menu.newAnimation']: [];
    ['assets.menu.renderPipeline']: [];
    ['assets.menu.forwardPipeline']: [];
    ['assets.menu.renderPipelineTS']: [];
    ['assets.menu.RenderFlowTS']: [];
    ['assets.menu.RenderStageTS']: [];
    ['assets.menu.newPac']: [];
    ['assets.menu.newTerrain']: [];
    ['assets.menu.copy']: [];
    ['assets.menu.cut']: [];
    ['assets.menu.paste']: [];
    ['assets.menu.delete']: [];
    ['assets.menu.rename']: [];
    ['assets.menu.selectall']: [];
    ['assets.menu.readonly']: [];
    ['assets.menu.revealInlibrary']: [];
    ['assets.menu.reimport']: [];
    ['assets.menu.revealInExplorer']: [];
    ['assets.menu.showUuid']: [];
    ['assets.menu.recommendTS']: [];
    ['assets.operate.cutReady']: [];
    ['assets.operate.cutDone']: [];
    ['assets.operate.copyReady']: [];
    ['assets.operate.copyDone']: [];
    ['assets.operate.dialogError']: [];
    ['assets.operate.dialogWarning']: [];
    ['assets.operate.dialogQuestion']: [];
    ['assets.operate.dialogInfo']: [];
    ['assets.operate.refreshing']: [];
    ['assets.operate.assetDataError']: [];
    ['assets.operate.sureDelete']: [{
        length: any;
        filelist: any;
    }];
    ['assets.operate.renameFail']: [];
    ['assets.operate.pasteFail_parent_into_child']: [];
    ['assets.operate.refreshFail']: [];
    ['assets.operate.readDefaultFileFail']: [];
    ['assets.operate.errorNewnameDuplicate']: [];
    ['assets.operate.errorNewnameUnlegal']: [];
    ['assets.operate.errorNewnameEmpty']: [];
    ['assets.operate.errorScriptName']: [];
    ['assets.operate.errorScriptClassName']: [];
    ['assets.deprecate.fire']: [];
    ['builder.title']: [];
    ['builder.create_user_template']: [];
    ['builder.build_config']: [];
    ['builder.build']: [];
    ['builder.compile']: [];
    ['builder.select_all']: [];
    ['builder.open_compile_file']: [];
    ['builder.source_map']: [];
    ['builder.recompile_engine']: [];
    ['builder.debug_mode']: [];
    ['builder.web_debugger']: [];
    ['builder.require']: [];
    ['builder.new_build_task']: [];
    ['builder.empty_task_holder']: [];
    ['builder.empty_scene']: [];
    ['builder.reveal_in_explorer']: [];
    ['builder.view_build_config']: [];
    ['builder.recompile']: [];
    ['builder.compress_texture']: [];
    ['builder.pack_autoAtlas']: [];
    ['builder.replace_splash_screen']: [];
    ['builder.run']: [];
    ['builder.open']: [];
    ['builder.export']: [];
    ['builder.import']: [];
    ['builder.export_build_config']: [];
    ['builder.import_build_config']: [];
    ['builder.include_project_setting']: [];
    ['builder.only_build_panel']: [];
    ['builder.options.taskName']: [];
    ['builder.options.name']: [];
    ['builder.options.platform']: [];
    ['builder.options.build_path']: [];
    ['builder.options.start_scene']: [];
    ['builder.options.inline_SpriteFrames']: [];
    ['builder.options.merge_json_by_scene']: [];
    ['builder.options.merge_start_scene']: [];
    ['builder.options.orientation']: [];
    ['builder.options.scenes']: [];
    ['builder.options.debug']: [];
    ['builder.options.resolution']: [];
    ['builder.options.preview_url']: [];
    ['builder.options.source_map']: [];
    ['builder.options.force_combile_engine']: [];
    ['builder.options.web_debugger']: [];
    ['builder.options.compress_texture']: [];
    ['builder.options.pack_autoAtlas']: [];
    ['builder.package']: [];
    ['builder.package_hint']: [];
    ['builder.desktop_icon']: [];
    ['builder.desktop_icon_hint']: [];
    ['builder.version_name']: [];
    ['builder.version_name_hint']: [];
    ['builder.version_number']: [];
    ['builder.version_number_hint']: [];
    ['builder.support_min_platform']: [];
    ['builder.support_min_platform_hint']: [];
    ['builder.full_screen']: [];
    ['builder.screen_orientation']: [];
    ['builder.landscape']: [];
    ['builder.portrait']: [];
    ['builder.tiny_packet_mode']: [];
    ['builder.tiny_packet_path']: [];
    ['builder.tiny_packet_path_hint']: [];
    ['builder.keystore']: [];
    ['builder.use_debug_keystore']: [];
    ['builder.private_pem_path']: [];
    ['builder.private_pem_path_hint']: [];
    ['builder.certificate_pem_path']: [];
    ['builder.certificate_pem_path_hint']: [];
    ['builder.print_finger']: [];
    ['builder.pack_res_to_first_pack']: [];
    ['builder.custom_npm_path']: [];
    ['builder.custom_npm_path_hint']: [];
    ['builder.custom_manifest_data']: [];
    ['builder.custom_manifest_data_error']: [];
    ['builder.remote_url']: [];
    ['builder.not_install_nodejs_windows_error']: [];
    ['builder.not_install_nodejs_mac_error']: [];
    ['builder.rpk_installing']: [];
    ['builder.rpk_install_fail']: [];
    ['builder.rpk_install_success']: [];
    ['builder.not_mainfest_data']: [];
    ['builder.npm_installed_success']: [];
    ['builder.npm_install_fail']: [];
    ['builder.oppo.new']: [];
    ['builder.oppo.not_empty']: [];
    ['builder.oppo.icon_not_exist']: [];
    ['builder.oppo.signature_not_exist']: [];
    ['builder.oppo.private_pem_path_error']: [];
    ['builder.oppo.certificate_pem_path_error']: [];
    ['builder.certificate.country']: [];
    ['builder.certificate.state']: [];
    ['builder.certificate.locality']: [];
    ['builder.certificate.organization']: [];
    ['builder.certificate.organizationalUnit']: [];
    ['builder.certificate.commonName']: [];
    ['builder.certificate.email']: [];
    ['builder.certificate.certificatePath']: [];
    ['builder.certificate.generate']: [];
    ['builder.certificate.build_certificate_complete']: [];
    ['builder.certificate.build_certificate_fail']: [];
    ['builder.huawei.select_certificate_path']: [];
    ['builder.huawei.install_nodejs_before_view_certificate']: [];
    ['builder.huawei.select_certificate_path_after_view_certificate']: [];
    ['builder.huawei.certificate_fingerprint']: [];
    ['builder.huawei.certificate_fingerprint_error']: [];
    ['builder.huawei.use_native_renderer']: [];
    ['builder.wechat_game.separate_engine']: [];
    ['builder.wechat_game.separate_engine_tips']: [];
    ['builder.wechat_game.client_path_error']: [{
        path: any;
    }];
    ['builder.wechat_game.client_info_path_err']: [{
        path: any;
    }];
    ['builder.wechat_game.client_version_low']: [];
    ['builder.wechat_game.remote_server_address']: [];
    ['builder.wechat_game.remote_server_address_tips']: [];
    ['builder.wechat_game.sub_context']: [];
    ['builder.wechat_game.sub_context_tips']: [];
    ['builder.wechat_game.build_sub']: [];
    ['builder.wechat_game.build_sub_tips']: [];
    ['builder.wechat_game.wechatgame_app_path_empty']: [];
    ['builder.error.build_error']: [];
    ['builder.error.dirty_info']: [];
    ['builder.error.build_dir_not_exists']: [{
        buildDir: any;
    }];
    ['builder.error.build_path_contains_space']: [];
    ['builder.error.build_path_contains_chinese']: [];
    ['builder.error.can_not_empty']: [];
    ['builder.error.project_name_not_legal']: [];
    ['builder.error.package_name_not_legal']: [];
    ['builder.error.package_name_start_with_number']: [];
    ['builder.error.select_scenes_to_build']: [];
    ['builder.error.binary_api_level']: [];
    ['builder.error.path_too_long_title']: [];
    ['builder.error.path_too_long_desc']: [{
        max_length: any;
    }];
    ['builder.error.keep_raw_texture_of_atlas']: [{
        texturePath: any;
        pacPath: any;
        assetPath: any;
    }];
    ['builder.error.arm64_not_support']: [{
        current_api: any;
        min_version: any;
    }];
    ['builder.warn.same_url']: [];
    ['builder.tasks.build_asset']: [];
    ['builder.tasks.build_engine']: [];
    ['builder.tasks.build_img']: [];
    ['builder.tasks.build_json']: [];
    ['builder.tasks.build_atlas']: [];
    ['builder.tasks.build_script']: [];
    ['builder.tasks.build_suffix']: [];
    ['builder.tasks.build_template']: [];
    ['builder.tasks.load_script']: [];
    ['builder.tasks.sort_asset']: [];
    ['builder.tasks.sort_image']: [];
    ['builder.tasks.sort_script']: [];
    ['builder.tasks.sort_sprite_frame']: [];
    ['builder.tasks.sort_texture']: [];
    ['builder.tasks.sort_json']: [];
    ['builder.tasks.settings.compress']: [];
    ['builder.tasks.settings.design_resolution']: [];
    ['builder.tasks.settings.group']: [];
    ['builder.tasks.settings.md5']: [];
    ['builder.tasks.settings.scene']: [];
    ['builder.tasks.settings.script']: [];
    ['builder.tips.enter_name']: [];
    ['builder.tips.taskName']: [];
    ['builder.tips.build_path']: [];
    ['builder.tips.build_scenes']: [];
    ['builder.tips.inline_SpriteFrames']: [];
    ['builder.tips.md5Cache']: [];
    ['builder.tips.merge_start_scene']: [];
    ['builder.tips.debug']: [];
    ['builder.tips.resolution']: [];
    ['builder.tips.web_debugger']: [];
    ['builder.tips.creat_template_success']: [];
    ['builder.tips.set_start_scene']: [];
    ['builder.splash_setting.title']: [];
    ['builder.splash_setting.drag_img_here']: [];
    ['builder.splash_setting.img_loading']: [];
    ['builder.splash_setting.confirm']: [];
    ['builder.splash_setting.settings.total_time']: [];
    ['builder.splash_setting.settings.display_ratio']: [];
    ['builder.splash_setting.settings.clear_color']: [];
    ['builder.splash_setting.settings.effect']: [];
    ['builder.splash_setting.settings.display_watermark']: [];
    ['builder.splash_setting.is_save_dialog.title']: [];
    ['builder.splash_setting.is_save_dialog.save']: [];
    ['builder.splash_setting.is_save_dialog.cancel']: [];
    ['builder.splash_setting.is_save_dialog.abort']: [];
    ['builder.is_remove_task.title']: [];
    ['builder.is_remove_task.has_building_task']: [];
    ['builder.is_remove_task.message']: [];
    ['builder.is_remove_task.remove']: [];
    ['builder.is_remove_task.deep_remove']: [];
    ['builder.is_remove_task.cancel']: [];
    ['builder.is_stop_build.title']: [];
    ['builder.is_stop_build.message']: [];
    ['builder.is_stop_build.stop']: [];
    ['builder.is_stop_build.cancel']: [];
    ['builder.is_close_win.title']: [];
    ['builder.is_close_win.message']: [];
    ['builder.is_close_win.force_close']: [];
    ['builder.is_close_win.cancel']: [];
    ['builder.is_save_scene.title']: [];
    ['builder.is_save_scene.message']: [];
    ['builder.is_save_scene.save']: [];
    ['builder.is_save_scene.ignore']: [];
    ['builder.is_save_scene.cancel']: [];
    ['builder.merge_json_by_scene']: [];
    ['builder.not_require']: [];
    ['builder.options.open_compile_file']: [];
    ['builder.custom_manifest_file_path']: [];
    ['builder.custom_manifest_file_path_hint']: [];
    ['builder.install_nodejs_before_view_certificate']: [];
    ['builder.window_default_npm_path_error']: [];
    ['builder.mac_default_npm_path_error']: [];
    ['builder.oppo.package_name_error']: [];
    ['builder.huawei.certificate_fingerprint_window_error']: [];
    ['builder.huawei.certificate_fingerprint_mac_error']: [];
    ['console.title']: [];
    ['console.editorLog']: [];
    ['console.cocosLog']: [];
    ['console.tabbar.regex']: [];
    ['console.preferences.display_date']: [];
    ['console.preferences.font_size']: [];
    ['console.preferences.line_height']: [];
    ['engine.title']: [];
    ['engine.compile_engine']: [];
    ['engine.wait_quick_compile']: [];
    ['engine.confirm']: [];
    ['engine.browse']: [];
    ['engine.open']: [];
    ['engine.engine_directory_illegal']: [];
    ['engine.engine_compile_failed']: [];
    ['engine.engine_compile_crash']: [];
    ['engine.javascript_engine']: [];
    ['engine.use_builtin_engine']: [];
    ['engine.custom_engine_path']: [];
    ['engine.QUICK_COMPILER.engine_modified_info']: [];
    ['engine.resources_docs_1']: [];
    ['engine.resources_docs_2']: [];
    ['engine.resources_docs_3']: [];
    ['engine.resources_docs_4']: [];
    ['hierarchy.title']: [];
    ['hierarchy.menu.createMenu']: [];
    ['hierarchy.menu.searchPlaceholder']: [];
    ['hierarchy.menu.searchPlaceholder_name']: [];
    ['hierarchy.menu.searchPlaceholder_uuid']: [];
    ['hierarchy.menu.searchPlaceholder_component']: [];
    ['hierarchy.menu.searchTip']: [];
    ['hierarchy.menu.search']: [];
    ['hierarchy.menu.searchName']: [];
    ['hierarchy.menu.searchUuid']: [];
    ['hierarchy.menu.searchComponent']: [];
    ['hierarchy.menu.refresh']: [];
    ['hierarchy.menu.allExpand']: [];
    ['hierarchy.menu.allCollapse']: [];
    ['hierarchy.menu.newNode']: [];
    ['hierarchy.menu.newNodeEmpty']: [];
    ['hierarchy.menu.new3dObject']: [];
    ['hierarchy.menu.new3dCube']: [];
    ['hierarchy.menu.new3dCylinder']: [];
    ['hierarchy.menu.new3dSphere']: [];
    ['hierarchy.menu.new3dCapsule']: [];
    ['hierarchy.menu.new3dCone']: [];
    ['hierarchy.menu.new3dTorus']: [];
    ['hierarchy.menu.new3dPlane']: [];
    ['hierarchy.menu.new3dQuad']: [];
    ['hierarchy.menu.newLightObject']: [];
    ['hierarchy.menu.newLightDirectional']: [];
    ['hierarchy.menu.newLightSphere']: [];
    ['hierarchy.menu.newLightSpot']: [];
    ['hierarchy.menu.newCameraObject']: [];
    ['hierarchy.menu.newTerrain']: [];
    ['hierarchy.menu.newEffects']: [];
    ['hierarchy.menu.newEffectsParticle']: [];
    ['hierarchy.menu.newUI']: [];
    ['hierarchy.menu.newUICanvas']: [];
    ['hierarchy.menu.newUISprite']: [];
    ['hierarchy.menu.newUILabel']: [];
    ['hierarchy.menu.newUIButton']: [];
    ['hierarchy.menu.newUIToggle']: [];
    ['hierarchy.menu.newUIToggleGroup']: [];
    ['hierarchy.menu.newUISlider']: [];
    ['hierarchy.menu.newUIProgressBar']: [];
    ['hierarchy.menu.newUIWidget']: [];
    ['hierarchy.menu.newUIEditBox']: [];
    ['hierarchy.menu.newUILayout']: [];
    ['hierarchy.menu.newUIScrollView']: [];
    ['hierarchy.menu.newUIMask']: [];
    ['hierarchy.menu.copy']: [];
    ['hierarchy.menu.cut']: [];
    ['hierarchy.menu.paste']: [];
    ['hierarchy.menu.delete']: [];
    ['hierarchy.menu.rename']: [];
    ['hierarchy.menu.duplicate']: [];
    ['hierarchy.menu.showUuid']: [];
    ['hierarchy.menu.link_prefab']: [];
    ['hierarchy.menu.link_prefab_error_node_empty']: [];
    ['hierarchy.menu.link_prefab_error_node_isScene']: [];
    ['hierarchy.menu.link_prefab_error_asset_empty']: [];
    ['hierarchy.menu.link_prefab_error_asset_invalid']: [];
    ['hierarchy.menu.link_prefab_make_sure']: [];
    ['hierarchy.menu.unlink_prefab']: [];
    ['hierarchy.menu.unlink_prefab_error_prefab_empty']: [];
    ['hierarchy.menu.errorNewnameEmpty']: [];
    ['hierarchy.operate.cutReady']: [];
    ['hierarchy.operate.cutDone']: [];
    ['hierarchy.operate.copyReady']: [];
    ['hierarchy.operate.copyDone']: [];
    ['hierarchy.operate.duplicateDone']: [];
    ['hierarchy.operate.dialogError']: [];
    ['hierarchy.operate.dialogWarning']: [];
    ['hierarchy.operate.dialogQuestion']: [];
    ['hierarchy.operate.dialogInfo']: [];
    ['hierarchy.operate.renameFail']: [];
    ['inspector.title']: [];
    ['inspector.add_component']: [];
    ['inspector.lock_unlock']: [];
    ['inspector.backward_selection']: [];
    ['inspector.forward_selection']: [];
    ['inspector.menu.remove_component']: [];
    ['inspector.menu.move_up_component']: [];
    ['inspector.menu.move_down_component']: [];
    ['inspector.menu.copy_node_value']: [];
    ['inspector.menu.paste_node_value']: [];
    ['inspector.menu.copy_component']: [];
    ['inspector.menu.paste_component']: [];
    ['inspector.menu.paste_component_values']: [];
    ['inspector.asset.directory.is_subpackage']: [];
    ['inspector.asset.directory.subpackage_name']: [];
    ['inspector.asset.javascript.plugin']: [];
    ['inspector.asset.javascript.loadPluginInWeb']: [];
    ['inspector.asset.javascript.loadPluginInEditor']: [];
    ['inspector.asset.javascript.loadPluginInNative']: [];
    ['inspector.asset.fbx.browse']: [];
    ['inspector.asset.spriteFrame.edit']: [];
    ['inspector.asset.texture.modeWarn']: [];
    ['inspector.node.layer.confirm_message']: [];
    ['inspector.node.layer.change_children']: [];
    ['inspector.node.layer.change_self']: [];
    ['inspector.gradient.title']: [];
    ['inspector.curve_editor.title']: [];
    ['inspector.sprite_editor.title']: [];
    ['inspector.sprite_editor.scale']: [];
    ['inspector.sprite_editor.reset']: [];
    ['inspector.sprite_editor.save']: [];
    ['inspector.sprite_editor.saveError']: [];
    ['inspector.sprite_editor.border']: [];
    ['inspector.sprite_editor.left']: [];
    ['inspector.sprite_editor.right']: [];
    ['inspector.sprite_editor.top']: [];
    ['inspector.sprite_editor.bottom']: [];
    ['inspector.check_is_saved.message']: [];
    ['inspector.check_is_saved.save']: [];
    ['inspector.check_is_saved.abort']: [];
    ['inspector.prefab.local']: [];
    ['inspector.prefab.reset']: [];
    ['inspector.prefab.save']: [];
    ['inspector.prefab.link']: [];
    ['inspector.prefab.unlink']: [];
    ['inspector.prefab.lost']: [];
    ['inspector.prefab.exist']: [];
    ['packager.title']: [];
    ['packager.menu.internal']: [];
    ['packager.menu.project']: [];
    ['packager.menu.global']: [];
    ['packager.menu.add']: [];
    ['packager.menu.addProject']: [];
    ['packager.menu.addGlobal']: [];
    ['packager.menu.addLabel']: [];
    ['packager.menu.addSuccess']: [];
    ['packager.menu.import']: [];
    ['packager.menu.importProject']: [];
    ['packager.menu.importGlobal']: [];
    ['packager.menu.importSuccess']: [];
    ['packager.menu.install']: [];
    ['packager.menu.installProject']: [];
    ['packager.menu.installGlobal']: [];
    ['packager.menu.installSuccess']: [];
    ['packager.menu.selectDirectory']: [];
    ['packager.menu.search']: [];
    ['packager.menu.openFolder']: [];
    ['packager.menu.author']: [];
    ['packager.menu.state']: [];
    ['packager.menu.remove']: [];
    ['packager.menu.removeSuccess']: [];
    ['packager.menu.removeConfirm']: [];
    ['packager.menu.enable']: [];
    ['packager.menu.disable']: [];
    ['packager.menu.enabled']: [];
    ['packager.menu.disabled']: [];
    ['packager.menu.invalid']: [];
    ['packager.menu.confirm']: [];
    ['packager.menu.addError']: [];
    ['packager.menu.importError']: [];
    ['preferences.title']: [];
    ['preferences.nav.general']: [];
    ['preferences.nav.edit']: [];
    ['preferences.nav.extension']: [];
    ['preferences.nav.native']: [];
    ['preferences.nav.laboratory']: [];
    ['preferences.general.language']: [];
    ['preferences.general.step']: [];
    ['preferences.general.preci']: [];
    ['preferences.general.theme']: [];
    ['preferences.general.themeColor']: [];
    ['preferences.general.preview_ip']: [];
    ['preferences.edit.script_editor']: [];
    ['preferences.edit.picture_editor']: [];
    ['preferences.edit.browse']: [];
    ['preferences.edit.remove']: [];
    ['preferences.edit.internal']: [];
    ['preferences.native.wechatgame_app_path']: [];
    ['preferences.extension.package']: [];
    ['preferences.laboratory.about']: [];
    ['preferences.laboratory.new_add_component']: [];
    ['preferences.browse']: [];
    ['preferences.open']: [];
    ['preview.title']: [];
    ['preview.automatic']: [];
    ['preview.automatic_tooltip']: [];
    ['preview.scene_is_empty']: [];
    ['preview.play']: [];
    ['preview.refresh_device']: [];
    ['preview.scan']: [];
    ['preview.create_template']: [];
    ['preview.load_current_scene_error']: [];
    ['preview.creat_template_success']: [];
    ['project-setting.title']: [];
    ['project-setting.nav.preview']: [];
    ['project-setting.nav.groupList']: [];
    ['project-setting.nav.modules']: [];
    ['project-setting.nav.engine']: [];
    ['project-setting.nav.layer']: [];
    ['project-setting.nav.graphics']: [];
    ['project-setting.nav.general']: [];
    ['project-setting.nav.projectPath']: [];
    ['project-setting.nav.wizardPath']: [];
    ['project-setting.preview.start_scene']: [];
    ['project-setting.preview.auto_refresh']: [];
    ['project-setting.preview.current_scene']: [];
    ['project-setting.preview.simulator_setting_type']: [];
    ['project-setting.preview.global']: [];
    ['project-setting.preview.project']: [];
    ['project-setting.preview.simulator_device_orientation']: [];
    ['project-setting.preview.simulator_resolution']: [];
    ['project-setting.preview.customize_resolution']: [];
    ['project-setting.preview.vertical']: [];
    ['project-setting.preview.horizontal']: [];
    ['project-setting.modules.title']: [];
    ['project-setting.modules.info']: [];
    ['project-setting.modules.warn']: [];
    ['project-setting.modules.module']: [];
    ['project-setting.modules.inquiry']: [];
    ['project-setting.modules.submodule']: [];
    ['project-setting.modules.inquiry_all']: [];
    ['project-setting.engine.cocos_default']: [];
    ['project-setting.engine.user_customize']: [];
    ['project-setting.engine.renderPipeline']: [];
    ['project-setting.engine.physics']: [];
    ['project-setting.engine.builtin']: [];
    ['project-setting.engine.cannon']: [];
    ['project-setting.engine.ammo']: [];
    ['project-setting.general.browse']: [];
    ['project-setting.general.ts_compiler']: [];
    ['project-setting.general.tslint.title']: [];
    ['project-setting.general.tslint.default']: [];
    ['project-setting.general.tslint.path']: [];
    ['project-setting.general.section_canvas']: [];
    ['project-setting.general.design_resolution']: [];
    ['project-setting.general.width']: [];
    ['project-setting.general.height']: [];
    ['project-setting.general.fit_width']: [];
    ['project-setting.general.fit_height']: [];
    ['project-setting.general.type_check_level']: [];
    ['project-setting.general.type_check_tips.disable']: [];
    ['project-setting.general.type_check_tips.checkOnly']: [];
    ['project-setting.general.type_check_tips.fatalOnError']: [];
    ['scene.title']: [];
    ['scene.new']: [];
    ['scene.save']: [];
    ['scene.save_as']: [];
    ['scene.develop']: [];
    ['scene.terrain.is_create_message']: [];
    ['scene.terrain.is_create']: [];
    ['scene.terrain.cancel']: [];
    ['scene.terrain.edit']: [];
    ['scene.terrain.save']: [];
    ['scene.terrain.delete']: [];
    ['scene.terrain.abort']: [];
    ['scene.messages.warning']: [];
    ['scene.messages.scenario_modified']: [];
    ['scene.messages.want_to_save']: [];
    ['scene.messages.save']: [];
    ['scene.messages.dont_save']: [];
    ['scene.messages.cancel']: [];
    ['scene.messages.save_as_fail']: [];
    ['scene.save_prefab']: [];
    ['scene.close_prefab']: [];
    ['scene.save_clip']: [];
    ['scene.close_clip']: [];
    ['scene.gizmos.icon3d']: [];
    ['scene.gizmos.showGrid']: [];
    ['scene.ui_tools.zoom_up']: [];
    ['scene.ui_tools.zoom_down']: [];
    ['scene.ui_tools.zoom_reset']: [];
    ['scene.ui_tools.align_top']: [];
    ['scene.ui_tools.align_v_center']: [];
    ['scene.ui_tools.align_bottom']: [];
    ['scene.ui_tools.align_left']: [];
    ['scene.ui_tools.align_h_center']: [];
    ['scene.ui_tools.align_right']: [];
    ['scene.ui_tools.distribute_top']: [];
    ['scene.ui_tools.distribute_v_center']: [];
    ['scene.ui_tools.distribute_bottom']: [];
    ['scene.ui_tools.distribute_left']: [];
    ['scene.ui_tools.distribute_h_center']: [];
    ['scene.ui_tools.distribute_right']: [];
    ['tester.auto_tooltip']: [];
    ['tester.play_tooltip']: [];
    ['tester.pause_tooltip']: [];
    ['ui-kit.title']: [];
}
