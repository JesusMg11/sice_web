-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-11-2020 a las 10:32:38
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `siceapp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `id_alu` int(11) NOT NULL,
  `nombre_alu` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `ap_pat_alu` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `ap_mat_alu` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `tipo_alu` varchar(15) CHARACTER SET utf8 DEFAULT NULL,
  `clave_unica_alu` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `correo_alu` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `contra_alu` varchar(80) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`id_alu`, `nombre_alu`, `ap_pat_alu`, `ap_mat_alu`, `tipo_alu`, `clave_unica_alu`, `correo_alu`, `contra_alu`) VALUES
(27, 'JESUS EMMANUEL ', 'MARTíNEZ ', 'GARCíA', 'ESTUDIANTE', 'S17030216', 'jesusmartinez881@gmail.com', '$2y$10$S.yBwpzJvDOBps3WbPD/OuPeXti5SVFFP/ha0IPH8lWdYEW84ydAW'),
(28, 'ADMINISTRADOR', 'ADMINISTRADOR', 'ADMINISTRADOR', 'EXTERNO', 'ADMINISTRADOR', 'administrador@admin.com', '$2y$10$pm7XM/pr/gX.KCW4sTgdp.FUfjCwbpbY9wbPXd3y.UF2KiRMw3Zoq'),
(29, 'LUISA FERNANDA', 'ROMERO', 'REYES', 'EXTERNO', 'S17030190', 'fer@dominio.com', '$2y$10$2mzi25pResVhb3EsvmPDm.3IWYxmFsWHqDoRBgMJT8ZT7eLkUgEh.'),
(30, 'VALENTIN', 'HERNANDEZ', 'ESPINOZA', 'EXTERNO', 'S170302170', 'tin@dominio.com', '$2y$10$.o3n7L504329lgXe65umeeH3JNXzw1Q7HBgwUaTvwNXAGzAQod6bO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `avisos`
--

CREATE TABLE `avisos` (
  `id_avi` int(11) NOT NULL,
  `mensaje_avi` varchar(400) DEFAULT NULL,
  `fecha_avi` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `avisos`
--

INSERT INTO `avisos` (`id_avi`, `mensaje_avi`, `fecha_avi`) VALUES
(1, 'Mensaje primero de prueba', '2020-10-30'),
(2, 'Mensaje segundo de prueba', '2020-10-30'),
(6, '<p>Prueba modificación</p>', '2020-11-11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargar_calificaciones`
--

CREATE TABLE `cargar_calificaciones` (
  `id_cc` int(11) NOT NULL,
  `id_grupo_cc` int(11) DEFAULT NULL,
  `clave_alu_cc` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `cal1_cc` int(11) DEFAULT NULL,
  `cal2_cc` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cargar_calificaciones`
--

INSERT INTO `cargar_calificaciones` (`id_cc`, `id_grupo_cc`, `clave_alu_cc`, `cal1_cc`, `cal2_cc`) VALUES
(2, 1, 'S17030216', 10, 100),
(3, 1, 'S17030190', 80, 90);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos`
--

CREATE TABLE `grupos` (
  `id_gru` int(11) NOT NULL,
  `nombre_gru` varchar(15) CHARACTER SET utf8 DEFAULT NULL,
  `periodo_gru` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `anio_gru` year(4) DEFAULT NULL,
  `modalidad_gru` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `lugares_gru` int(11) DEFAULT NULL,
  `id_maestro_gru` int(11) DEFAULT NULL,
  `bandera_gru` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `grupos`
--

INSERT INTO `grupos` (`id_gru`, `nombre_gru`, `periodo_gru`, `anio_gru`, `modalidad_gru`, `lugares_gru`, `id_maestro_gru`, `bandera_gru`) VALUES
(1, 'M11A', 'AGO-DIC', 2020, 'ESCOLARIZADO', 21, 1, 'true'),
(7, 'M10S', 'FEB-JUN', 2020, 'SABATINO', 18, 3, 'true'),
(8, 'M55Z', 'FEB-JUN', 2020, 'ESCOLARIZADO', 15, 1, 'true'),
(9, 'M77B', 'FEB-JUN', 2020, 'ESCOLARIZADO', 37, 3, 'true'),
(12, 'M22A', 'FEB-JUN', 2020, 'ESCOLARIZADO', 21, 2, 'false');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscripcion_grupo`
--

CREATE TABLE `inscripcion_grupo` (
  `id_ing` int(11) NOT NULL,
  `id_alumno_ing` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `id_grupo_ing` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `inscripcion_grupo`
--

INSERT INTO `inscripcion_grupo` (`id_ing`, `id_alumno_ing`, `id_grupo_ing`) VALUES
(9, 'S17030216', 1),
(10, 'S17030190', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maestros`
--

CREATE TABLE `maestros` (
  `id_mae` int(11) NOT NULL,
  `nombre_mae` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `ap_pat_mae` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `ap_mat_mae` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `correo_mae` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `telefono_mae` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `contra_mae` varchar(80) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `maestros`
--

INSERT INTO `maestros` (`id_mae`, `nombre_mae`, `ap_pat_mae`, `ap_mat_mae`, `correo_mae`, `telefono_mae`, `contra_mae`) VALUES
(1, 'LUISA FERNANDA', 'ROMERO', 'REYES', 'feer.hx@itsch.com', '7861000000', '$2y$10$AN34HIxXy4whimktjbJaHOwoELtk89uMCgnF/57mi/OzcHdzI58EK'),
(2, 'VALENTIN', 'HERNANDEZ', 'ESPINOZA', 'tin.he@itsch.com', '4471000000', '$2y$10$PfBavdGPXfLYIP/2Xcc.cexI327FFlyXHNZHc2e6dC539lynSSOwi'),
(3, 'JESUS EMMANUEL', 'MARTINEZ', 'GARCIA', 'jesus@itsch.com', '4474780909', '$2y$10$zwizYnjr.Ej7ESnxqq0S5uf6x/rEovC5d2aIDQRMmlKkPy3mqts2u'),
(4, 'STEPHANY ALEJANDRA', 'VILLA', 'ESQUIVEL', 'ale@itsch.com', '7861230404', '$2y$10$RXPeR12f9VZGcooZtC55LO/TirI3Z3LQfAGpKtHIu3sRq8TkWS47i');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`id_alu`),
  ADD UNIQUE KEY `clave_unica_alu` (`clave_unica_alu`);

--
-- Indices de la tabla `avisos`
--
ALTER TABLE `avisos`
  ADD PRIMARY KEY (`id_avi`);

--
-- Indices de la tabla `cargar_calificaciones`
--
ALTER TABLE `cargar_calificaciones`
  ADD PRIMARY KEY (`id_cc`),
  ADD KEY `id_grupo_cc` (`id_grupo_cc`),
  ADD KEY `clave_alu_cc` (`clave_alu_cc`);

--
-- Indices de la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD PRIMARY KEY (`id_gru`),
  ADD KEY `id_maestro_gru` (`id_maestro_gru`);

--
-- Indices de la tabla `inscripcion_grupo`
--
ALTER TABLE `inscripcion_grupo`
  ADD PRIMARY KEY (`id_ing`),
  ADD KEY `id_alumno_ing` (`id_alumno_ing`),
  ADD KEY `id_grupo_ing` (`id_grupo_ing`);

--
-- Indices de la tabla `maestros`
--
ALTER TABLE `maestros`
  ADD PRIMARY KEY (`id_mae`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `id_alu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `avisos`
--
ALTER TABLE `avisos`
  MODIFY `id_avi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `cargar_calificaciones`
--
ALTER TABLE `cargar_calificaciones`
  MODIFY `id_cc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `grupos`
--
ALTER TABLE `grupos`
  MODIFY `id_gru` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `inscripcion_grupo`
--
ALTER TABLE `inscripcion_grupo`
  MODIFY `id_ing` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `maestros`
--
ALTER TABLE `maestros`
  MODIFY `id_mae` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cargar_calificaciones`
--
ALTER TABLE `cargar_calificaciones`
  ADD CONSTRAINT `cargar_calificaciones_ibfk_1` FOREIGN KEY (`id_grupo_cc`) REFERENCES `grupos` (`id_gru`),
  ADD CONSTRAINT `cargar_calificaciones_ibfk_2` FOREIGN KEY (`clave_alu_cc`) REFERENCES `alumnos` (`clave_unica_alu`);

--
-- Filtros para la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD CONSTRAINT `grupos_ibfk_1` FOREIGN KEY (`id_maestro_gru`) REFERENCES `maestros` (`id_mae`);

--
-- Filtros para la tabla `inscripcion_grupo`
--
ALTER TABLE `inscripcion_grupo`
  ADD CONSTRAINT `inscripcion_grupo_ibfk_1` FOREIGN KEY (`id_alumno_ing`) REFERENCES `alumnos` (`clave_unica_alu`),
  ADD CONSTRAINT `inscripcion_grupo_ibfk_2` FOREIGN KEY (`id_grupo_ing`) REFERENCES `grupos` (`id_gru`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
