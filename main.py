import os
import winsound
import win32com.client
import speech_recognition as sr
import datetime
import time
import webbrowser
import subprocess
import pywhatkit
import tkinter as tk
from PIL import Image, ImageTk
import threading

speaker = win32com.client.Dispatch("SAPI.SpVoice")

def speak(text):
    speaker.Speak(text)


# Listens To the audio
def listen():
    s = input()
    speaker.Speak(s)


# Takes Command
def take_command():
    r = sr.Recognizer()
    r.pause_threshold = 0.5
    r.energy_threshold = 800
    r.non_speaking_duration = 0.3
    r.phrase_threshold = 0.1
    with sr.Microphone() as source:
        audio = r.listen(source)
        try:
            query = r.recognize_google(audio, language='en-in')
            # print(query)
            return query
        except Exception as e:
            return 'Apologies! Could you Repeat That again'

keywords = [
    'introduce', 'introduction', 'yourself', 'who are you', 
    'time', 'youtube', 'wikipedia', 'google', 
    'facebook', 'amazon', 'twitter', 'instagram', 
    'linkedin', 'reddit', 'spotify', 'pinterest', 
    'tumblr', 'snapchat', 'adobe', 'netflix', 
    'yahoo', 'gmail', 'whatsapp', 'ebay', 
    'quora', 'music', 'song', 'songs', 
    'any desk', 'calculator', 'excel', 'figma', 
    'file', 'files', 'file manager', 'gimp', 
    'chrome', 'inkscape', 'onenote', 'opentoons', 
    'opera', 'ppt', 'power point', 'vs code', 
    'word', 'game', 'quiz', 'play', 
    'exit', 'quit', 'listen', 'jarvis', 'listen mode'
    ]

def play_notification_sound(file_path):
    winsound.PlaySound(file_path, winsound.SND_FILENAME)


# Jarvis ... Text Initial
def jarvis_speaks():
    print("\n\nJarvis ...  ", end="\n\n")


def intro(query):
    if "introduce".lower() in query.lower() or "introduction".lower() in query.lower() or "yourself".lower() in query.lower() or "who are you".lower() in query.lower():
        notification()
        jarvis_speaks()
        # print("Hello! I'm Jarvis, your assistant model created in python language. I am designed to provide information and generate voice and text, access your device to run applications, open multiple websites, and provide you games to play to help you improve your learning. ")
        # speak("Hello! I'm Jarvis, your assistant model created in python language. I am designed to provide information and generate voice and text, access your device to run applications, open multiple websites, and provide you games to play to help you improve your learning. ")

        print(
            "Hello Sir! I'm Jarvis, your assistant model created in python language. I am designed to provide information and generate voice and text, access your device to run applications, open multiple websites, and provide you games to play to help you improve your learning. ")
        speak(
            "Hello Sir! I'm Jarvis, your assistant model created in python language.")
        speak(
            " I am designed to provide information and generate voice and text, access your device to run applications, open multiple websites, and provide you games to play to help you improve your learning. ")


def timeCurrent(query):
    if "time".lower() in query.lower():
        jarvis_speaks()
        notification()
        hourr = int(datetime.datetime.now().hour)
        minutee = int(datetime.datetime.now().minute)
        AmPm = ""
        if hourr > 12:
            hourr -= 12
            AmPm = "Pm"
        else:
            AmPm = "Am"

        hr = str(hourr)
        mi = str(minutee)

        print_hr = hr
        print_min = mi

        if hourr < 10:
            print_hr = "0" + hr
        if minutee < 10:
            print_min = "0" + mi

        print(f"{print_hr}:{print_min} {AmPm}")
        speak(f"Right Now it is {hourr} {minutee} {AmPm}")

def emergencyMsg(query):
    phoneNo = '+919714655344'
    msg = 'Emergency!!! Please Help Me. I am in trouble. Please send immediate assistance.'
    hour = int(datetime.datetime.now().hour)
    minute = int(datetime.datetime.now().minute)
    if 'help help'.lower() in query.lower():
        speak('Wait for a few moments please')
        try:
            pywhatkit.sendwhatmsg(phoneNo,msg , hour,minute+1)
        except:
            pywhatkit.sendwhatmsg(phoneNo,msg , hour,minute+2)
        speak("Sending message")


def starting_voice():
    jarvis_speaks()
    notification()
    print("Greetings Sir! How may I help you ?\n______________________________________________________________\n\n")
    speak("Greetings Sir! How may I help you ?")


def opensites(query):
    sites = [["YouTube", "https://youtube.com", ], ["wikipedia", "https://wikipedia.org"],
             ["google", "https://google.com"], ["Facebook", "https://www.facebook.com"],
             ["Amazon", "https://www.amazon.com"], ["Twitter", "https://twitter.com"],
             ["Instagram", "https://instagram.com"], ["LinkedIn", "https://linkedIn.com"],
             ["Reddit", "https://reddit.com"], ["Netflix", "https://Netflix.com"], 
             ["Yahoo", "https://Yahoo.com"], ["Spotify", "https://Spotify.com"], 
             ["Gmail", "https://Gmail.com"], ["WhatsApp", "https://web.whatsapp.com/"],
             ["Pinterest", "https://Pinterest.com"], ["Tumblr", "https://Tumblr.com"],
             ["Snapchat", "https://Snapchat.com"], ["Ebay", "https://Ebay.com"], 
             ["Quora", "https://Quora.com"], ["Adobe", "https://Adobe.com"]]

    for site in sites:
        if f"Open {site[0]}".lower() in query.lower():
            jarvis_speaks()
            print(f'Opening {site[0]} Sir...')
            speak(f'Opening {site[0]} Sir...')
            webbrowser.open(site[1])


def music(query):
    if "music".lower() in query.lower() or "song".lower() in query.lower() or 'songs'.lower() in query.lower():
        jarvis_speaks()
        notification()
        print("Playing Music")
        speak("Playing Music")
        musicpath = r"C:\Users\krimy\Music\songs\just-relax-11157.mp3"
        time.sleep(1)
        musicfolder = r"C:\Users\krimy\Music\songs"
        os.startfile(musicpath)
        os.startfile(musicfolder)
        
def apps(query):
    app_paths = {
        'Any Desk': r"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\AnyDesk\AnyDesk.lnk",
        'calculator': "calc.exe",
        'calendar': "start outlookcal:",
        'excel': r"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Excel.lnk",
        'figma': r"C:\Users\krimy\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Figma.lnk",
        'file': r"C:\Users\krimy\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\File Explorer.lnk",
        'files': r"C:\Users\krimy\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\File Explorer.lnk",
        'file manager': r"C:\Users\krimy\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\File Explorer.lnk",
        'gimp': r"C:\Users\krimy\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\GIMP 2.10.34.lnk",
        'Chrome': r"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Google Chrome.lnk",
        'inkscape': r"C:\Users\krimy\OneDrive\Documents\Falgun\Inkscape.lnk",
        'OneNote': r"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\OneNote.lnk",
        'Open toons': r"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\OpenToonz\OpenToonz.lnk",
        'Opera': r"C:\Users\krimy\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Opera Browser.lnk",
        'power point': r"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\PowerPoint.lnk",
        'vs code': r"C:\Users\krimy\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Visual Studio Code\Visual Studio Code.lnk",
        'word': r"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Word.lnk"   
    }

    for keyword, path in app_paths.items():
        if keyword.lower() in query.lower():
            jarvis_speaks()
            notification()
            print(f'Opening {keyword}')
            speak(f'Opening {keyword}')
            if path.endswith(".exe"):
                subprocess.run(path, shell=True)
            else:
                os.startfile(path)
            break


def game(query):
    if 'game'.lower() in query.lower() or 'quiz'.lower() in query.lower() or 'play'.lower() in query.lower() and 'music'.lower() not in query.lower():
        jarvis_speaks()
        notification()
        print(f'Opening Quiz')
        speak(f'Opening Quiz')
        os.startfile(r"C:\Users\krimy\OneDrive\Documents\Falgun\Jarvis\JARVIS Quiz\index.html")


def listen_main():
    
    while True:
        query = take_command()
        # print(query)
        if 'exit'.lower() in query.lower() or 'quit'.lower() in query.lower():
            jarvis_speaks()
            notification()
            print('Farewell Sir! Hope to see you again.')
            speak('Farewell Sir! Hope to see you again.')
            break
        

        if 'Jarvis'.lower() in query.lower():
            print('\nListening ... ')
            notification()
        
        opensites(query)
        music(query)
        timeCurrent(query)
        apps(query)
        intro(query)
        emergencyMsg(query)

        if 'play'.lower() in query.lower() and 'music' not in query.lower():
            game(query)
            
    
def notification():
    play_notification_sound(r"C:\Users\krimy\OneDrive\Documents\Falgun\Jarvis\notification-sound-7062.wav")



def center_window(window, width, height):
    screen_width = window.winfo_screenwidth()
    screen_height = window.winfo_screenheight()
    
    x = (screen_width - width) // 2  
    y = (screen_height - height) // 2 

    window.geometry('{}x{}+{}+{}'.format(width, height, x, y))
    window.overrideredirect(True)  # Remove title bar

class AnimatedGIFLabel(tk.Label):
    def __init__(self, master, filename):
        self.gif = Image.open(filename)
        self.width, self.height = self.gif.size  # Get dimensions of the GIF file
        self.frames = []
        self.idx = 0
        self.delay = self.gif.info['duration']
        self.load_frames()
        super().__init__(master, image=self.frames[0])

    def load_frames(self):
        try:
            while True:
                self.frames.append(ImageTk.PhotoImage(self.gif.copy()))
                self.gif.seek(len(self.frames))
        except EOFError:
            self.gif.seek(0)

    def display_next_frame(self):
        self.config(image=self.frames[self.idx])
        self.idx += 1
        if self.idx == len(self.frames):
            self.idx = 0
        self.after(self.delay, self.display_next_frame)

def play_gif(filename):
    def run_gui():
        root = tk.Tk()
        animated_label = AnimatedGIFLabel(root, filename)
        animated_label.pack()
        animated_label.display_next_frame()  # Start animation
        center_window(root, animated_label.width, animated_label.height)  # Position and size window
        root.mainloop()

    threading.Thread(target=run_gui, daemon=True).start()

#Main Section
if __name__ == '__main__':    
    play_gif('asset/CricleUi.gif')
    starting_voice()
    listen_main()
