import speech_recognition as sr
from gtts import gTTS
from openai import OpenAI, models
import os
import playsound

# Initialize the OpenAI object with your API key
openai = OpenAI(api_key='')

# Function to transcribe speech to text
def listen_to_speech(recognizer, microphone):
    with microphone as source:
        print("Please speak now...")
        audio = recognizer.listen(source)
    try:
        text = recognizer.recognize_google(audio)
        print("You said:", text)
        return text
    except sr.UnknownValueError:
        print("Google Speech Recognition could not understand audio")
        return None
    except sr.RequestError as e:
        print(f"Could not request results from Google Speech Recognition service; {e}")
        return None

# Function to get a response from GPT-3
def get_gpt_response(text, history=None):
    if history is None:
        # Initialize history if not provided
        history = []

    # Add the current user message to the history
    user_message = {"role": "user", "content": f"{text}"}
    history.append(user_message)

    # Make the API call with the entire conversation history
    response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a caring caregiver."},
            *history  # Unpack the history list here
        ]
    )

    # Add the model's response to the history
    model_response = response.choices[0].message.content
    history.append({"role": "assistant", "content": model_response})

    return model_response, history

# Function to convert text to speech
def text_to_speech(response_text, filename="response.mp3"):
    tts = gTTS(text=response_text, lang='en')
    tts.save(filename)
    playsound.playsound(filename)
    os.remove(filename)

# Main program loop
def main():
    recognizer = sr.Recognizer()
    
    # Adjust recognizer settings if needed
    recognizer.energy_threshold = 3000
    recognizer.dynamic_energy_threshold = True

    while True:
        # Use 'with' to ensure the microphone is released after each use
        with sr.Microphone() as microphone:
            print("Listening for your question (say 'quit' to stop)...")
            
            # Optionally, you can adjust the microphone's energy threshold
            recognizer.adjust_for_ambient_noise(microphone, duration=1)

            try:
                audio = recognizer.listen(microphone, timeout=5, phrase_time_limit=10)
                question = recognizer.recognize_google(audio)
                print("You said:", question)
                
                if question.lower() == 'quit':
                    break

                response_text = get_gpt_response(question)
                print("GPT-3 response:", response_text)
                text_to_speech(response_text)

            except sr.WaitTimeoutError:
                print("No speech was detected. Try again...")
                continue
            except sr.UnknownValueError:
                print("Google Speech Recognition could not understand audio")
                continue
            except sr.RequestError as e:
                print(f"Could not request results from Google Speech Recognition service; {e}")
                continue
            except Exception as e:
                print(f"An unexpected error occurred; {e}")
                continue

if __name__ == "__main__":
    main()
