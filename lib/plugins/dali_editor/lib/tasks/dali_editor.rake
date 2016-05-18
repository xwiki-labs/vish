# encoding: utf-8
#
# Rake task to import dali editor into vish

=begin
		#In case we copy the ruby way
		system "cp -r " + DALI_EDITOR_PATH + "/dist/images " +  DALI_EDITOR_PLUGIN_PATH + "/app/assets/images"
		system "cp -r " + DALI_EDITOR_PATH + "/dist/lib " +  DALI_EDITOR_PLUGIN_PATH + "/app/assets/javascripts"
		system "cp -r " + DALI_EDITOR_PATH + "/dist/plugins " +  DALI_EDITOR_PLUGIN_PATH + "/app/assets/javascripts/plugins"
		system "cp " + DALI_EDITOR_PATH + "/dist/BasePlugin.js " +  DALI_EDITOR_PLUGIN_PATH + "/app/assets/javascripts/editor/"
		system "cp " + DALI_EDITOR_PATH + "/dist/BasePluginVisor.js " +  DALI_EDITOR_PLUGIN_PATH + "/app/assets/javascripts/editor/"
		system "cp " + DALI_EDITOR_PATH + "/dist/dist.zip " +  DALI_EDITOR_PLUGIN_PATH + "/extras/dist.zip"
		system "cp " + DALI_EDITOR_PATH + "/dist/index.html " +  DALI_EDITOR_PLUGIN_PATH + "/app/views/dali_document"
		system "cp " + DALI_EDITOR_PATH + "/dist/plugins.js " +  DALI_EDITOR_PLUGIN_PATH + "/app/assets/javascripts/editor/"
=end

#PATHS
DALI_EDITOR_PLUGIN_PATH = "lib/plugins/dali_editor"
DALI_EDITOR_PATH = "../dali"

REGEX_SAVE = "http://127.0.0.1:8081/saveConfig"
REGEX_GET =  "http://127.0.0.1:8081/getConfig"

REGEX_LIB = 'src="lib/"'
PATH_LIB = 'src="assets/editor/'
PATH_PLUGINS = 'src="assets/lib/'
PATH_PLUGINS = 'src="assets/plugins/'

SAVE_URL_DALI = "url"
GET_URL_DALI = "url"

namespace :dali_editor do

	task :rebuild do
		Rake::Task["dali_editor:import"].invoke
    Rake::Task["dali_editor:rewrite_api_paths"].invoke
	end

	task :import do
		puts "Importing Dali into VISH"

		system "rm -rf " + DALI_EDITOR_PLUGIN_PATH + "/app"
		system "rm -rf " + DALI_EDITOR_PLUGIN_PATH + "/extras"

		system "mkdir " + DALI_EDITOR_PLUGIN_PATH + "/app/"
		system "mkdir " + DALI_EDITOR_PLUGIN_PATH + "/app/assets"
		system "mkdir " + DALI_EDITOR_PLUGIN_PATH + "/app/assets/images"
		system "mkdir " + DALI_EDITOR_PLUGIN_PATH + "/app/assets/stylesheets"
		system "mkdir " + DALI_EDITOR_PLUGIN_PATH + "/app/assets/javascripts"
		system "mkdir " + DALI_EDITOR_PLUGIN_PATH + "/app/assets/javascripts/editor"
		system "mkdir " + DALI_EDITOR_PLUGIN_PATH + "/app/views"
		system "mkdir " + DALI_EDITOR_PLUGIN_PATH + "/extras"

		system "cp -r " + DALI_EDITOR_PATH + "/dist/images " +  DALI_EDITOR_PLUGIN_PATH + "/app/assets/images"
		system "cp -r " + DALI_EDITOR_PATH + "/dist/css " +  DALI_EDITOR_PLUGIN_PATH + "/app/assets/stylesheets"
		system "cp -r " + DALI_EDITOR_PATH + "/dist/lib " +  DALI_EDITOR_PLUGIN_PATH + "/app/assets/javascripts"
		system "cp -r " + DALI_EDITOR_PATH + "/dist/plugins " +  DALI_EDITOR_PLUGIN_PATH + "/app/assets/javascripts/plugins"
		system "cp " + DALI_EDITOR_PATH + "/dist/BasePlugin.js " +  DALI_EDITOR_PLUGIN_PATH + "/app/assets/javascripts/editor"
		system "cp " + DALI_EDITOR_PATH + "/dist/BasePluginVisor.js " +  DALI_EDITOR_PLUGIN_PATH + "/app/assets/javascripts/editor"
		system "cp " + DALI_EDITOR_PATH + "/dist/bundle.js " +  DALI_EDITOR_PLUGIN_PATH + "/app/assets/javascripts/editor"
		system "cp " + DALI_EDITOR_PATH + "/dist/plugins.js " +  DALI_EDITOR_PLUGIN_PATH + "/app/assets/javascripts/editor"

		system "cp " + DALI_EDITOR_PATH + "/dist/dist.zip " +  DALI_EDITOR_PLUGIN_PATH + "/extras/dist.zip"
		system "cp " + DALI_EDITOR_PATH + "/dist/index.html " +  DALI_EDITOR_PLUGIN_PATH + "/app/views/dali_document.html"
		system "cp " + DALI_EDITOR_PATH + "/dist/plugins.js " +  DALI_EDITOR_PLUGIN_PATH + "/app/assets/javascripts/editor/"
	end

	task :rewrite_api_paths do
		system "sed -i 's#" + REGEX_SAVE+ "#" + SAVE_URL_DALI + "#g' " + DALI_EDITOR_PLUGIN_PATH + "/app/assets/javascripts/editor/bundle.js"
		system "sed -i 's#" + REGEX_GET+ "#" + GET_URL_DALI + "#g' " + DALI_EDITOR_PLUGIN_PATH + "/app/assets/javascripts/editor/bundle.js"
	end

	task :rewrite_localization_paths do
			system "sed -i 's#" + REGEX_LIB+ "#" + SAVE_URL_DALI + "#g' " + DALI_EDITOR_PLUGIN_PATH + "/app/assets/javascripts/editor/bundle.js"
	end
end
