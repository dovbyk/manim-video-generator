from manim import *
from gtts import gTTS
from pydub import AudioSegment
import os

class GradientDescentWithVoice(MovingCameraScene):
    def generate_voiceover(self, text, filename="voice.mp3"):
        # Generate voiceover audio using Google Text-to-Speech
        tts = gTTS(text)
        tts.save(filename)
        sound = AudioSegment.from_mp3(filename)
        # Convert mp3 to wav because Manim supports wav audio better
        sound.export("voice.wav", format="wav")

    def construct(self):
        narration = (
            "This is a visualization of gradient descent. "
            "Imagine we're trying to minimize the function f of x equals x squared. "
            "This curve represents our loss function. "
            "We start at a random point on the curve, say x equals 3. "
            "The slope of the curve tells us how steep it is. "
            "Using the derivative, we calculate the gradient. "
            "We then take a step in the opposite direction of the gradient. "
            "This is how gradient descent works — it updates the position iteratively, moving closer to the minimum. "
            "With each step, we descend further down the curve. "
            "Eventually, we reach a point where the gradient is near zero — the minimum. "
            "Gradient descent is a fundamental concept in machine learning, used to train models by minimizing loss functions."
        )

        # Generate audio file from narration text
        self.generate_voiceover(narration)

        # Add audio to scene; Manim plays it automatically synced with animation timeline
        self.add_sound("voice.wav")

        # Display the title at the top of the screen
        title = Text("Gradient Descent", font_size=48).to_edge(UP)
        self.play(Write(title), run_time=3)
        self.wait(0.5)

        # Set up coordinate axes
        axes = Axes(
            x_range=[-4, 4],
            y_range=[0, 16],
            x_length=10,
            y_length=5,
            axis_config={"color": GREY},
        ).shift(DOWN)

        # Define the function f(x) = x^2
        func = lambda x: x**2
        graph = axes.plot(func, color=BLUE)
        graph_label = axes.get_graph_label(graph, label="f(x) = x^2")

        # Animate creation of axes and graph
        self.play(Create(axes), run_time=1.5)
        self.play(Create(graph), run_time=3)
        self.play(Write(graph_label), run_time=1.5)
        self.wait(0.5)

        # Place the starting point (dot) on the graph at x=3
        x = 3
        dot = Dot(color=RED).move_to(axes.c2p(x, func(x)))
        start_label = Text("Start at x=3", font_size=24).next_to(dot, UP)
        self.play(FadeIn(dot), Write(start_label), run_time=2)
        self.wait(0.7)

        # Gradient descent steps parameters
        steps = 8
        alpha = 0.3  # learning rate / step size

        for i in range(steps):
            # Calculate gradient at current position
            grad = 2 * x
            next_x = x - alpha * grad
            next_pos = axes.c2p(next_x, func(next_x))

            # Draw the tangent line representing the gradient
            tangent_line = Line(
                start=axes.c2p(x - 1, func(x) - grad),
                end=axes.c2p(x + 1, func(x) + grad),
                color=YELLOW
            )
            grad_label = MathTex(f"\\nabla f = {grad:.1f}").next_to(dot, RIGHT)

            # Animate tangent line creation and gradient label fade in
            self.play(Create(tangent_line), FadeIn(grad_label), run_time=1.2)

            # Animate moving the dot to the new position along the curve
            self.play(dot.animate.move_to(next_pos), run_time=1.5, rate_func=rate_functions.ease_in_out_quad)

            # Fade out the tangent line, gradient label, and previous label
            self.play(FadeOut(tangent_line), FadeOut(grad_label), FadeOut(start_label), run_time=1)

            # Update x to new position for next iteration
            x = next_x

            # Update the label showing current x value
            start_label = Text(f"x ≈ {x:.2f}", font_size=24).next_to(dot, UP)
            self.play(Write(start_label), run_time=1.2)
            self.wait(0.5)

        # Final point reached - highlight in green and add label
        final_label = Text("Minimum Reached", font_size=24, color=GREEN).next_to(dot, DOWN)
        self.play(Write(final_label), dot.animate.set_color(GREEN), run_time=2)
        self.wait(0.7)

        # Zoom in camera frame on the final point
        frame = self.camera.frame
        original_center = frame.get_center()
        original_width = frame.get_width()

        self.play(frame.animate.set(width=4).move_to(dot), run_time=2.5)
        self.wait(1.5)

        # Zoom back out to original camera view
        self.play(frame.animate.set(width=original_width).move_to(original_center), run_time=2.5)
        self.wait(2)
