#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use font_kit::source::SystemSource;
use hostname;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn get_local_fonts() -> Vec<(String, String)> {
    let system_source = SystemSource::new();
    let all_fonts = system_source.all_fonts().unwrap();
    let mut local_fonts: Vec<(String, String)> = Vec::new();
    for font in all_fonts {
        match font.load().unwrap().postscript_name() {
            Some(name) => {
                let family_name = font.load().unwrap().family_name();
                local_fonts.push((name, family_name));
            }
            None => (),
        }
    }
    local_fonts
}

#[tauri::command]
fn get_device_name() -> String {
    hostname::get().unwrap().to_string_lossy().to_string()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_local_fonts, get_device_name])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
