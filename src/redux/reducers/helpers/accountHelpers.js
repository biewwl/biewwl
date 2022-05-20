import lS from '../../../helpers/storageManager';
import { Encripta } from '../../../helpers/crypto';

const INITIAL_STATE = {
  logged: {
    status: false,
    user: '',
  },
  profile: {
    user: '',
    image: '',
    password: '',
  },
}

const login = (user, password) => {
  const existLogin = lS('g', `login-${user}`);
  const userLogin = {
    status: true,
    user,
  }
  if(existLogin) {
    if(Encripta(Encripta(password)) === existLogin.password) {
      lS('s', 'logged', userLogin);
      return {
        logged: userLogin,
        profile: existLogin,
      };
    } else {
      alert('Wrong password!');
      return INITIAL_STATE;
    }
  } else {
    const profile = {
      user,
      image: '',
      password: Encripta(Encripta(password)),
    }
    lS('s', `login-${user}`, profile);
    lS('s', 'logged', userLogin);
    return {
      logged: {
        status: true,
        user,
      },
      profile,
    };
  }
}

const logout = () => {
  const logged = {
    status: false,
    user: '',
  };
  lS('s', 'logged', logged);
  return {
    logged,
    profile: {
      user: '',
      image: '',
      password: '',
    }
  }
}

const deleteAccount = (user) => {
  lS('r', `login-${user}`);
  return logout();
}

const changeProfile = (user, image, password) => {
  const targetUser = lS('g', `login-${user}`);
  const newLogged = {
    status: true,
    user,
  }
  const newProfile = {
    user,
    image,
    password,
  };
  const atualUser = lS('g', 'logged');
  if (targetUser === null || atualUser.user === user) {
    lS('s', 'logged', newLogged);
    lS('r', `login-${atualUser.user}`);
    lS('s', `login-${user}`, newProfile);
    return {
      logged: newLogged,
      profile: newProfile,
    }
  } else {
    alert('Usuário não disponível');
    return {
      logged: {
        ...atualUser,
      },
    }
  }
}

export { login, logout, deleteAccount, changeProfile };
